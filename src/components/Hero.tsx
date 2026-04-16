import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';
import Navbar from './Navbar';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["CS Student", "Fullstack Dev", "SaaS Builder", "Problem Solver"];

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

  // GSAP Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Role Cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Welcome to my workspace
        </p>

        <h1 className="name-reveal text-5xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Manideep Koleti
        </h1>

        <div className="blur-in text-xl md:text-3xl font-body font-light text-muted mb-8 flex flex-wrap justify-center items-center gap-2">
          <span>I'm a</span>
          <span 
            key={roleIndex} 
            className="font-display italic text-text-primary inline-block animate-role-fade-in"
          >
            {roles[roleIndex]}
          </span>
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-lg mx-auto mb-12">
          I build software that solves problems. Passionate about turning simple ideas into scalable, real-world solutions that improve everyday efficiency.
        </p>

        <div className="blur-in flex flex-col sm:flex-row items-center gap-4">
          <a href="#work" className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-all duration-300 bg-text-primary text-bg hover:bg-bg hover:text-text-primary overflow-visible">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 font-medium">See Works</span>
          </a>
          
          <a href="#contact" className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-all duration-300 border-2 border-stroke bg-bg text-text-primary hover:border-transparent overflow-visible">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="absolute inset-0 bg-bg rounded-full -z-0 group-hover:block" />
            <span className="relative z-10 font-medium">Connect with me</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em] mb-4">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
