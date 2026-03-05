export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl tracking-tight mb-4">tic tac tone</h3>
            <p className="text-white/60">
              where tic-tac-toe meets music creation.
            </p>
            <p className="text-white/60 mt-4 text-sm">
              requires iOS 17.0 or later
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4 text-white/60">links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://dave-suzuki.github.io/tic-tak-toe-sampler/" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                launch app
              </a>
              <a href="guide.html" className="hover:text-white/60 transition-colors">
                user guide
              </a>
              <a href="support.html" className="hover:text-white/60 transition-colors">
                support
              </a>
              <a href="privacy-policy.html" className="hover:text-white/60 transition-colors">
                privacy policy
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4 text-white/60">contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@crosstown-experience.com" className="hover:text-white/60 transition-colors">
                info@crosstown-experience.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>&copy; 2026 <a href="mailto:info@crosstown-experience.com" className="hover:text-white/60 transition-colors">Crosstown Experience</a></div>
          <div>made with curiosity and code</div>
        </div>
      </div>
    </footer>
  )
}
