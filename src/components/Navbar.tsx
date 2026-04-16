import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Work', 'Resume'];

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    if (link === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'Resume') {
      window.open('/Manideep_Koleti_Resume.pdf', '_blank');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div 
        className={cn(
          "pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300",
          scrolled ? "shadow-md shadow-black/40" : ""
        )}
      >
        {/* Logo */}
        <div className="group relative w-9 h-9 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:[animation-direction:reverse]" />
          <div className="absolute inset-[2px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">MK</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden md:block" />

        {/* Links */}
        <div className="flex items-center space-x-1 px-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={cn(
                "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200",
                activeLink === link 
                  ? "text-text-primary bg-stroke/50" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              )}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1" />

        {/* Say Hi Button */}
        <a href="mailto:manideepkoleti@fluxbill.in" className="group relative text-xs sm:text-sm rounded-full h-[32px] sm:h-[36px] px-3 sm:px-4 ml-1 flex items-center gap-1 overflow-visible">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-surface rounded-full backdrop-blur-md transition-colors" />
          <span className="relative z-10 text-text-primary flex items-center gap-1 pointer-events-none">
            Say hi <ArrowUpRight className="w-3 h-3" />
          </span>
        </a>
      </div>
    </nav>
  );
}
