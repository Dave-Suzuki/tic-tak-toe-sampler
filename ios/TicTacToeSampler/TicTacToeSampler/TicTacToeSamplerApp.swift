import SwiftUI
import AVFoundation

@main
struct TicTacToeSamplerApp: App {
    @Environment(\.scenePhase) private var scenePhase

    init() {
        AudioSessionManager.configure()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .onChange(of: scenePhase) { _, newPhase in
            if newPhase == .active {
                AudioSessionManager.reactivate()
                NotificationCenter.default.post(name: .appDidBecomeActive, object: nil)
            }
        }
    }
}

extension Notification.Name {
    static let appDidBecomeActive = Notification.Name("appDidBecomeActive")
}
