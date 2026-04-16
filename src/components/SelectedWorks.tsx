import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  { 
    id: 1, 
    title: 'FluxBill', 
    description: 'A SaaS tool designed to track and control API usage costs. Helps developers monitor spending, set usage limits, and avoid unexpected billing across multiple providers.',
    span: 'col-span-1 md:col-span-12 lg:col-span-12', 
    tags: ['SaaS', 'API Tracking', 'Cost Control', 'React', 'Next.js'],
    image: '/images/fluxbill.png',
    link: 'https://www.fluxbill.in'
  },
  { 
    id: 2, 
    title: 'Streamify', 
    description: 'A Full Stack movie streaming application. Features include third-party API integration for movie data, optimized API calls, and efficient state management.',
    span: 'col-span-1 md:col-span-6 lg:col-span-6',
    tags: ['React', 'Spring Boot', 'REST API', 'MongoDB'],
    image: '/images/streamify.png',
    link: '#'
  },
  { 
    id: 3, 
    title: 'PrintQR', 
    description: 'A QR-based Print Management System that eliminates manual file transfers. Customers scan a QR code to upload files directly to the shop dashboard.',
    span: 'col-span-1 md:col-span-6 lg:col-span-6',
    tags: ['React', 'Node.js', 'QR Code API', 'Dashboard UI'],
    image: '/images/printqr.png',
    link: 'https://print-qr.vercel.app/'
  },
];

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-24 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary tracking-tight mb-4">
              Some Things I've <span className="font-display italic text-text-primary">built</span>
            </h2>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              target={project.link !== '#' ? "_blank" : "_self"}
              rel="noreferrer"
              className={cn(
                "group relative overflow-hidden bg-surface border border-stroke rounded-3xl cursor-pointer flex flex-col p-8 md:p-12 transition-colors",
                project.span,
                "min-h-[300px] md:min-h-[400px]"
              )}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-40 group-hover:opacity-20"
              />

              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px"
                }}
              />

              {/* Hover Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/60 to-bg/10 group-hover:from-bg/95 group-hover:via-bg/80 group-hover:to-bg/40 transition-all duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="mb-auto">
                  <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed group-hover:text-text-primary/80 transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-stroke/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2 text-xs text-text-primary/70 font-medium uppercase tracking-wider group-hover:text-text-primary transition-colors">
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                  
                  <div className="hidden md:flex w-10 h-10 rounded-full border border-stroke/80 bg-bg/50 items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all shrink-0">
                    <ArrowRight className="w-4 h-4 text-text-primary/70 group-hover:text-text-primary group-hover:-rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
