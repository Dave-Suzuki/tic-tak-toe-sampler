import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color(red: 0xD6/255, green: 0xCE/255, blue: 0xC4/255)
                .ignoresSafeArea()
            WebView()
        }
        .persistentSystemOverlays(.hidden)
    }
}
