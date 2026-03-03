export function GenreShowcase() {
  const genres = [
    { name: 'hip-hop', bpm: 90, description: 'boom-bap grooves with punchy kick and warm bass' },
    { name: 'techno', bpm: 128, description: 'driving 4/4 pulse with sharp hats and acid bass' },
    { name: 'ambient', bpm: 75, description: 'ethereal textures, soft pads, floating arpeggios' },
    { name: 'chiptune', bpm: 140, description: 'retro 8-bit energy with square and pulse waves' },
    { name: 'jungle', bpm: 155, description: 'fast breakbeats, rolling bass, chopped percussion' },
    { name: 'lo-fi', bpm: 79, description: 'warm homework tape feel with rain textures' },
    { name: 'house', bpm: 124, description: 'classic four-on-the-floor with soulful chords' },
    { name: 'ragga', bpm: 88, description: 'kingston riddims with skank chords and deep bass' }
  ]

  return (
    <div id="features" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-7xl tracking-tight mb-6">8 genres</h2>
          <p className="text-xl text-black/60">
            each with unique instruments, tempo, and character
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className="border border-black/10 p-6 hover:bg-white transition-colors"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl tracking-tight">{genre.name}</h3>
                <span className="text-sm text-black/40">{genre.bpm} BPM</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                {genre.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specs */}
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
