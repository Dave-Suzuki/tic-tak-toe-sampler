export function Features() {
  const features = [
    {
      number: '01',
      title: '4 game modes',
      description: '2P for two players sharing a device. AI for single-player with smart computer opponent. JAM for free-form experimentation. EDIT for pattern customization.'
    },
    {
      number: '02',
      title: '8 music genres',
      description: 'hip-hop, techno, ambient, chiptune, jungle, lo-fi, house, and ragga. each with unique instruments, tempo (75-155 BPM), and color schemes.'
    },
    {
      number: '03',
      title: '9 instruments per genre',
      description: 'consistent grid layout: drums in row 1 (kick, snare, hi-hat), melodic elements in row 2 (bass, chord, arp), and textures in row 3 (perc, pad, lead).'
    },
    {
      number: '04',
      title: '16-step sequencer',
      description: 'every instrument has a customizable 16-step pattern. toggle steps on/off, adjust note pitches for melodic instruments, all in EDIT mode with solo playback.'
    },
    {
      number: '05',
      title: 'real-time controls',
      description: 'BPM (40-200), tap tempo, swing (0-100%), frequency filter (low/high pass), and humanized feel for natural micro-timing variations.'
    },
    {
      number: '06',
      title: 'XY effect pads',
      description: 'two multi-touch surfaces for live performance. left pad: reverb + delay. right pad: distortion + tremolo. drag to shape sound in real-time.'
    }
  ]

  return (
    <div id="features" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-7xl tracking-tight mb-20 text-center">features</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {features.map((feature) => (
            <div key={feature.number} className="border-t border-black/10 pt-8">
              <div className="text-sm text-black/40 mb-4 tracking-wider">{feature.number}</div>
              <h3 className="text-3xl tracking-tight mb-4">{feature.title}</h3>
              <p className="text-lg text-black/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Specs Section */}
        <div className="mt-32 pt-16 border-t border-black/10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl tracking-tight mb-2">9</div>
              <div className="text-black/60">instruments</div>
            </div>
            <div>
              <div className="text-5xl tracking-tight mb-2">8</div>
              <div className="text-black/60">genres</div>
            </div>
            <div>
              <div className="text-5xl tracking-tight mb-2">16</div>
              <div className="text-black/60">steps per pattern</div>
            </div>
            <div>
              <div className="text-5xl tracking-tight mb-2">&infin;</div>
              <div className="text-black/60">creative combinations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
