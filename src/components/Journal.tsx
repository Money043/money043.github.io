import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const otherProjects = [
  { 
    id: 1, 
    title: 'LLM-Powered DevOps Assistant', 
    description: 'Built an LLM-based assistant using FastAPI, Groq, and LLaMA 3.3 70B to analyze CI/CD logs and suggest fixes in real time. Automated root cause detection, improving debugging speed and deployment efficiency.',
    tags: 'FastAPI • Groq • LLaMA 3.3 • Python • CI/CD' 
  },
  { 
    id: 2, 
    title: 'Resume Parser with Job Recommendation', 
    description: 'Developed an AI-powered system using Django and BERT to extract skills and match candidates via semantic similarity. Enabled accurate job recommendations beyond keyword matching with an intuitive UI.',
    tags: 'Django • BERT • NLP • Python • ML' 
  },
];

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24 relative z-20">
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
                Archive
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary tracking-tight mb-4">
              Other Noteworthy <span className="font-display italic text-text-primary">projects</span>
            </h2>
          </div>

          <button className="hidden md:inline-flex group relative rounded-full items-center gap-2 h-12 px-6 overflow-visible self-start md:self-end">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border border-stroke rounded-full group-hover:border-transparent bg-bg transition-colors" />
            <span className="relative z-10 text-text-primary text-sm font-medium flex items-center gap-2">
              View the archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        {/* Project Entries */}
        <div className="flex flex-col gap-4">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col p-6 md:p-8 rounded-[40px] bg-surface/30 hover:bg-surface border border-stroke cursor-pointer transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-display italic text-text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="hidden sm:flex w-8 h-8 rounded-full border border-stroke items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-text-primary group-hover:-rotate-45 transition-all duration-300" />
                </div>
              </div>
              
              <p className="text-sm md:text-base text-muted mb-6 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              
              <div className="text-xs font-medium text-muted uppercase tracking-widest mt-auto">
                {project.tags}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <button className="md:hidden mt-8 w-full group relative rounded-full items-center justify-center gap-2 h-12 px-6 overflow-visible">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 border border-stroke rounded-full group-hover:border-transparent bg-bg transition-colors" />
          <span className="relative z-10 text-text-primary text-sm font-medium flex items-center justify-center gap-2">
            View the archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}
