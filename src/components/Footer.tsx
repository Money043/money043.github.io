import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // HLS Video Setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const source = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({ startPosition: -1 });
      hls.loadSource(source);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
    }
  }, []);

  // Marquee Setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden z-20">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* CTA Button */}
        <div className="mb-16 md:mb-24 px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display italic text-text-primary mb-8 tracking-tight">
            Connect with me!
          </h2>
          <a href="mailto:manideepkoleti@fluxbill.in" className="group relative rounded-full items-center justify-center gap-2 h-14 md:h-16 px-8 md:px-12 overflow-visible inline-flex bg-bg/50 backdrop-blur-md border border-white/10 hover:border-transparent transition-colors">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-[2px] rounded-full bg-bg transition-colors" />
            <span className="relative z-10 text-text-primary text-base md:text-lg font-medium flex items-center gap-2">
              Get in touch <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Marquee */}
        <div className="w-full relative py-8 border-y border-white/10 flex overflow-hidden bg-bg/30 backdrop-blur-sm">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[8vw] sm:text-6xl lg:text-8xl font-body font-bold text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 uppercase tracking-tighter mx-4 outline-text">
                BUILDING THE FUTURE &bull; 
              </span>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500"></span>
            </div>
            <span className="text-sm text-text-primary">Available for opportunities</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="https://www.linkedin.com/in/manideep-koleti/" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/Money043" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
            <a href="https://www.youtube.com/@money_65T" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">YouTube</a>
          </div>

          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Manideep Koleti
          </div>
        </div>
      </div>
    </footer>
  );
}
