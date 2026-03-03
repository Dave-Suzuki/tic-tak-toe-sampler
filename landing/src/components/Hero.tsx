import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl tracking-tight">tic tac tone</div>
          <div className="flex gap-8">
            <a href="#product" className="hover:opacity-60 transition-opacity">product</a>
            <a href="#features" className="hover:opacity-60 transition-opacity">features</a>
            <a href="https://dave-suzuki.github.io/tic-tak-toe-sampler/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">try it</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-20 px-6">
        <div className="max-w-[1000px] text-center">
          <div className="text-[8vw] md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tight mb-8">
            tic tac tone
          </div>
          <p className="text-xl md:text-2xl tracking-tight text-black/60 mb-12 max-w-[600px] mx-auto">
            play tic-tac-toe.<br />
            make music together.<br />
            every move is a beat.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://dave-suzuki.github.io/tic-tak-toe-sampler/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors"
            >
              launch app
              <ArrowRight size={20} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors"
            >
              learn more
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/40">
        <span className="text-xs tracking-wider uppercase">scroll</span>
        <div className="w-[1px] h-12 bg-black/20"></div>
      </div>
    </div>
  )
}
