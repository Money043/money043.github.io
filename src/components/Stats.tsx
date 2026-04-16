import { motion } from 'framer-motion';

export default function Stats() {
  const mods = [
    { label: "Exhaust", value: "AEW" },
    { label: "Aesthetics", value: "Batman Wrap" },
    { label: "Lighting", value: "HJG Aux" },
    { label: "Performance", value: "nGage Air Filter" },
    { label: "Electronics", value: "FlashX Module" },
  ];

  return (
    <section className="bg-bg py-16 md:py-24 relative z-20 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
             <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                The Machine
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-text-primary tracking-tight mb-4">
              Royal Enfield <span className="italic">Continental GT 650</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              The beast that powers my adventures. Equipped with twin-cylinder power and cafe-racer soul, it's more than just a bike—it's a reflection of my engineering spirit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x-0 md:divide-x divide-stroke text-center">
          {mods.map((mod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center pt-4 md:pt-0 px-2 last:col-span-2 md:last:col-span-1"
            >
              <div className="text-xl md:text-2xl font-display italic text-text-primary mb-2">
                {mod.value}
              </div>
              <div className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">
                {mod.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
