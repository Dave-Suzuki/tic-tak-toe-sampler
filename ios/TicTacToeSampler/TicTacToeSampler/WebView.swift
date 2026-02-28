import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.mediaTypesRequiringUserActionForPlayback = []
        config.allowsInlineMediaPlayback = true
        config.allowsAirPlayForMediaPlayback = true

        let webView = WKWebView(frame: .zero, configuration: config)

        webView.scrollView.bounces = false
        webView.scrollView.isScrollEnabled = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never

        webView.isOpaque = false
        webView.backgroundColor = .clear
        webView.scrollView.backgroundColor = .clear

        webView.allowsLinkPreview = false

        webView.navigationDelegate = context.coordinator
        context.coordinator.webView = webView

        if let htmlURL = Bundle.main.url(forResource: "index", withExtension: "html") {
            webView.loadFileURL(htmlURL, allowingReadAccessTo: htmlURL.deletingLastPathComponent())
        }

        NotificationCenter.default.addObserver(
            context.coordinator,
            selector: #selector(Coordinator.appDidBecomeActive),
            name: .appDidBecomeActive,
            object: nil
        )

        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    class Coordinator: NSObject, WKNavigationDelegate {
        weak var webView: WKWebView?

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            let disableSelectionJS = """
                document.documentElement.style.webkitUserSelect = 'none';
                document.documentElement.style.webkitTouchCallout = 'none';
            """
            webView.evaluateJavaScript(disableSelectionJS)
        }

        func webView(_ webView: WKWebView,
                     decidePolicyFor navigationAction: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            if navigationAction.navigationType == .linkActivated {
                decisionHandler(.cancel)
            } else {
                decisionHandler(.allow)
            }
        }

        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
            webView.reload()
        }

        @objc func appDidBecomeActive() {
            // Delay to let the WebView process fully wake up
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { [weak self] in
                self?.resumeAudio()
            }
            // Retry after a longer delay in case the first attempt fails
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) { [weak self] in
                self?.resumeAudio()
            }
        }

        private func resumeAudio() {
            // Call the page's own resumeAudioPlayback() which tears down
            // the old AudioContext and creates a fresh one.
            let resumeJS = """
                if (typeof resumeAudioPlayback === 'function') {
                    resumeAudioPlayback();
                }
            """
            webView?.evaluateJavaScript(resumeJS)
        }
    }
}
