import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const leftItems = [
  { id: 1, type: 'video', src: '/videos/bikevideo.mp4', z: 30 }, // Row 1 Left (Above)
  { id: 2, type: 'image', src: '/images/bike1.jpg', z: 10 },    // Row 2 Left (Below)
  { id: 3, type: 'image', src: '/images/bike2.jpg', z: 30 },    // Row 3 Left (Above)
];

const rightItems = [
  { id: 4, type: 'image', src: '/images/bike3.jpg', z: 10 },    // Row 1 Right (Below)
  { id: 5, type: 'video', src: '/videos/img2.mp4', z: 30 },     // Row 2 Right (Above)
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax left items individually
      gsap.to(".parallax-left", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Parallax right items individually
      gsap.to(".parallax-right", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Text move to the right side of the last image and UNPIN
      gsap.to(textRef.current, {
        x: "15vw",
        opacity: 0.8,
        scale: 0.85,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textWrapperRef.current,
          endTrigger: containerRef.current,
          start: "center center", 
          end: "bottom 90%", // Unpins specifically when the section almost finishes scrolling
          pin: true,
          scrub: 1,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden border-t border-stroke/50">
      
      {/* Background/Foreground Media Container (no z-index/opacity so children mix globally) */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto px-4 md:px-16 overflow-hidden">
        
        {/* Left Column */}
        <div className="flex flex-col gap-16 md:gap-40 pt-[60vh] pointer-events-auto w-[42vw] sm:w-[280px] md:w-[380px]">
          {leftItems.map((item, i) => (
            <div 
              key={item.id} 
              className={`parallax-left relative shadow-2xl shadow-black w-full rounded-[40px] overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-105 border-4 border-white/5 bg-black ${item.z === 30 ? 'opacity-95' : 'opacity-40 grayscale mix-blend-screen group-hover:mix-blend-normal group-hover:grayscale-0'}`}
              style={{ 
                transform: `rotate(${i % 2 === 0 ? '-6deg' : '4deg'})`,
                aspectRatio: item.type === 'video' ? '9/16' : '3/4',
                zIndex: item.z
              }}
            >
              {item.type === 'video' ? (
                <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <img src={item.src} alt="Biking Exploration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-16 md:gap-40 pt-[90vh] pointer-events-auto w-[42vw] sm:w-[280px] md:w-[380px]">
          {rightItems.map((item, i) => (
            <div 
              key={item.id} 
              className={`parallax-right relative shadow-2xl shadow-black w-full rounded-[40px] overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-105 border-4 border-white/5 bg-black ${item.z === 30 ? 'opacity-95' : 'opacity-40 grayscale mix-blend-screen group-hover:mix-blend-normal group-hover:grayscale-0'}`}
              style={{ 
                transform: `rotate(${i % 2 === 0 ? '6deg' : '-4deg'})`,
                aspectRatio: item.type === 'video' ? '9/16' : '3/4',
                zIndex: item.z
              }}
            >
              {item.type === 'video' ? (
                <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <img src={item.src} alt="Biking Exploration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Central Text Layer (z-20) */}
      <div 
        ref={textWrapperRef}
        className="absolute top-[20vh] left-0 w-full pointer-events-none px-4" 
        style={{ zIndex: 20 }}
      >
        <div ref={textRef} className="h-auto w-full flex flex-col items-center justify-center max-w-3xl mx-auto backdrop-blur-[2px]">
          <span className="text-sm md:text-xl text-accent uppercase tracking-[0.4em] mb-6 block font-medium drop-shadow-md">
            Life Beyond Code
          </span>
          <h2 className="text-[14vw] sm:text-6xl md:text-8xl lg:text-[100px] leading-[0.9] font-body font-light text-white tracking-tight mb-8 drop-shadow-2xl">
            Biking <br /><span className="font-display italic text-text-primary">adventures</span>
          </h2>
          <div className="text-text-primary text-base md:text-lg mb-12 space-y-6 max-w-lg font-medium mx-auto mix-blend-difference">
            <p className="drop-shadow-lg">
              When I’m not building SaaS products or architecting backend systems, you’ll likely find me on the road. I’m a passionate biker who loves exploring new landscapes.
            </p>
            <p className="drop-shadow-lg hidden md:block">
              One of my most memorable trips was to PARGI. It’s a breathtaking location offering a stunning mountain view of the sunrise.
            </p>
          </div>
          
          <a href="https://www.youtube.com/@money_65T" target="_blank" rel="noreferrer" className="group relative rounded-full items-center justify-center gap-2 h-14 px-10 overflow-visible inline-flex mx-auto pointer-events-auto">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border border-transparent rounded-full group-hover:bg-bg/20 bg-bg transition-colors backdrop-blur-md" />
            <span className="relative z-20 text-white text-base font-semibold flex items-center justify-center gap-2 drop-shadow-md">
              Watch on YouTube <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}
