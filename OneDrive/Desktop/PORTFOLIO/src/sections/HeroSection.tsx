import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
        >
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Vignette & Gradient Overlays for High Contrast & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/70 via-[#0C0C0C]/40 to-[#0C0C0C]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] gap-2">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onOpenContact}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Center Main Content & Massive Heading */}
      <div className="w-full my-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 z-10 space-y-4 sm:space-y-6 py-12">
        {/* Subtle Tech Badge */}
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 bg-black/50 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-widest text-[#B600A8] shadow-lg">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>AI &amp; Full-Stack Developer</span>
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 sm:ml-1 text-[#7621B0]" />
          </div>
        </FadeIn>

        {/* Hero Heading */}
        <div className="w-full max-w-7xl mx-auto overflow-hidden px-2">
          <FadeIn delay={0.2} y={40} className="w-full text-center">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full select-none text-center drop-shadow-2xl"
              style={{ fontSize: 'clamp(1.75rem, 9.5vw, 140px)' }}
            >
              Hi, i&apos;m mohan
            </h1>
          </FadeIn>
        </div>

        {/* Developer Pills / Tech Highlights */}
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-[#D7E2EA]/80 font-light tracking-wide uppercase max-w-2xl mx-auto">
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B600A8]" /> Python &amp; Java
            </span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              AI Agents (n8n &amp; LLMs)
            </span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              React &amp; SpringBoot
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 z-20 text-center sm:text-left">
        <FadeIn delay={0.4} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] sm:max-w-[240px] md:max-w-[300px] drop-shadow-md"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
          >
            driven by crafting striking, intelligent, and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
