export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'pick your mode',
      description: '2P for head-to-head. AI to challenge the computer. JAM for free-form creativity with no rules. EDIT to customize every instrument\'s 16-step pattern—toggle steps, adjust pitches, and solo each instrument.'
    },
    {
      number: '02',
      title: 'claim your pads',
      description: 'tap a square to make your move. each pad activates a different instrument—drums at the top, melodic elements in the middle, textures at the bottom. your beat builds with every move.'
    },
    {
      number: '03',
      title: 'get three in a row',
      description: 'line up three marks to win. the sequencer enters break mode, playing only your winning three instruments. strategic moves create musical moments.'
    },
    {
      number: '04',
      title: 'shape the sound',
      description: 'adjust BPM from 40-200. add swing for groove. drag the XY pads to control reverb, delay, distortion, and tremolo. tap tempo to sync with external music.'
    }
  ]

  return (
    <div id="how-it-works" className="py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-7xl tracking-tight mb-32 text-center">how it works</h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24 max-w-[1200px] mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-black/10 pt-8">
              <div className="text-8xl tracking-tight text-black/5 mb-4">
                {step.number}
              </div>
              <h3 className="text-4xl tracking-tight mb-6">{step.title}</h3>
              <p className="text-xl text-black/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
