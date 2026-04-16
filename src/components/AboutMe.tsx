

export default function AboutMe() {
  const technologies = [
    "React.js", "Next.js", "Node.js", "Spring Boot", "MongoDB", "AWS Cloud"
  ];

  return (
    <section id="about" className="bg-bg py-16 md:py-24 relative z-20 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* About Text Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-8 italic">
              Hello! My name is Manideep.
            </h2>
            
            <div className="space-y-6 text-muted text-base md:text-lg font-light leading-relaxed">
              <p>
                I enjoy building products that solve real-world problems. My interest in software development started with a passion for turning simple ideas into working solutions that people can actually use.
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of building multiple full-stack applications, from QR-based print management systems to SaaS tools for cost transparency. My main focus these days is building scalable apps and exploring the startup ecosystem.
              </p>
              <p>
                I have a strong foundation in data structures, algorithms, and object-oriented programming, which helps me build robust and efficient software.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-sm text-text-primary mb-4 font-medium">Here are a few technologies I’ve been working with recently:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted">
                {technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education & Highlights Column */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="sticky top-24">
              <div className="aspect-[4/5] bg-surface rounded-3xl border border-stroke overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent z-10 opacity-80" />
                
                <img 
                  src="/images/profile.jpg" 
                  alt="Manideep Koleti"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />

                {/* Animated Grid Outline Wow Factor */}
                <div 
                  className="absolute inset-0 border border-white/10 group-hover:border-transparent transition-colors duration-500 z-10 pointer-events-none" 
                />
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:opacity-50 transition-all duration-700 pointer-events-none group-hover:scale-110 ease-out"
                  style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "center center"
                  }}
                />
                
                {/* Accent glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 accent-gradient mix-blend-color transition-opacity duration-700 z-0 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-display italic text-text-primary mb-2">Education & Highlights</h3>
                  
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="border-l border-stroke pl-4">
                      <h4 className="text-sm font-medium text-text-primary">Founder @ FluxBill</h4>
                      <p className="text-xs text-muted mt-1">Feb 2026 - Present</p>
                      <p className="text-xs text-muted mt-3">
                        Built a unified AI Proxy Gateway & Cost Management Dashboard. Routed requests to save average of 31% on monthly AI spend.
                      </p>
                    </div>

                    <div className="border-l border-stroke pl-4">
                      <h4 className="text-sm font-medium text-text-primary">GITAM University</h4>
                      <p className="text-xs text-muted mt-1">Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
