const base = import.meta.env.BASE_URL

export function ProductShowcase() {
  return (
    <div id="product" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        {/* App Screenshots */}
        <div className="mb-32">
          <div className="grid md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            <div className="bg-white border border-black/10 p-4">
              <img src={`${base}screenshot1.png`} alt="Tic Tac Tone — Ambient theme" className="w-full h-auto" />
            </div>
            <div className="bg-white border border-black/10 p-4">
              <img src={`${base}screenshot2.png`} alt="Tic Tac Tone — Ragga theme" className="w-full h-auto" />
            </div>
            <div className="bg-white border border-black/10 p-4">
              <img src={`${base}screenshot3.png`} alt="Tic Tac Tone — Hip-Hop theme" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Description Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-5xl tracking-tight mb-6">game meets instrument</h2>
            <p className="text-xl text-black/60 leading-relaxed">
              two players. nine pads. one evolving beat. every move you make activates an instrument—kick, snare, bass, lead. claim three in a row to win and hear your combination play solo.
            </p>
          </div>
          <div>
            <h2 className="text-5xl tracking-tight mb-6">8 genres. infinite vibes</h2>
            <p className="text-xl text-black/60 leading-relaxed">
              from 90 bpm hip-hop to 155 bpm jungle breaks. switch genres mid-game and watch the same board transform into completely different music. ambient, techno, lo-fi, ragga—each with custom sounds and tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
