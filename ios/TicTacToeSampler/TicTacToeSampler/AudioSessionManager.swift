import AVFoundation

enum AudioSessionManager {
    static func configure() {
        let session = AVAudioSession.sharedInstance()
        do {
            try session.setCategory(.playback, mode: .default)
            try session.setActive(true)
        } catch {
            print("AudioSession configuration error: \(error)")
        }

        // Listen for audio interruptions (phone calls, Siri, device lock)
        NotificationCenter.default.addObserver(
            forName: AVAudioSession.interruptionNotification,
            object: session,
            queue: .main
        ) { notification in
            handleInterruption(notification)
        }
    }

    static func reactivate() {
        let session = AVAudioSession.sharedInstance()
        do {
            try session.setCategory(.playback, mode: .default)
            try session.setActive(true, options: .notifyOthersOnDeactivation)
        } catch {
            print("AudioSession reactivation error: \(error)")
        }
    }

    private static func handleInterruption(_ notification: Notification) {
        guard let info = notification.userInfo,
              let typeValue = info[AVAudioSessionInterruptionTypeKey] as? UInt,
              let type = AVAudioSession.InterruptionType(rawValue: typeValue) else { return }

        if type == .ended {
            // Interruption ended — reactivate and tell the WebView to resume
            reactivate()
            NotificationCenter.default.post(name: .appDidBecomeActive, object: nil)
        }
    }
}
