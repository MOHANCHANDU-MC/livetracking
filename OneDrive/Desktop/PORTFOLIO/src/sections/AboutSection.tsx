import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { Code2, Terminal, Brain, Palette, Eye, Sparkles, Cpu, LayoutGrid } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const aboutBioText =
    "Currently pursuing B.Tech in CSE (Artificial Intelligence) at CBIT (2022–2026). I specialize in AI agents, machine learning, and full-stack web development. Beyond writing code, I possess a strong eye for visual analysis, color theory, and UI hierarchy, crafting harmonious, modern, and high-impact digital experiences. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden border-b border-white/5"
    >
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-12 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-12 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-12 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* DESKTOP FLOATING CARDS - Symmetrically framing the central content container */}

      {/* Card 1: Top Left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-4 xl:left-12 2xl:left-24 z-10 hidden lg:block"
      >
        <FadeIn delay={0.1} x={-40} y={0} duration={0.8}>
          <div className="group relative p-5 rounded-3xl border border-cyan-500/30 bg-[#121212]/95 backdrop-blur-xl shadow-[0_15px_35px_rgba(6,182,212,0.15)] flex flex-col gap-3 hover:scale-[1.03] hover:border-cyan-400 transition-all duration-300 w-[230px]">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-semibold text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Dev
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Clean Code</h4>
              <p className="text-[11px] text-[#D7E2EA]/60 font-light mt-0.5">Java, Python &amp; React Architecture</p>
            </div>
            <div className="px-2.5 py-1 rounded-xl bg-black/60 border border-white/10 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>const status = 200;</span>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* Card 2: Top Right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-16 right-4 xl:right-12 2xl:right-24 z-10 hidden lg:block"
      >
        <FadeIn delay={0.15} x={40} y={0} duration={0.8}>
          <div className="group relative p-5 rounded-3xl border border-purple-500/30 bg-[#121212]/95 backdrop-blur-xl shadow-[0_15px_35px_rgba(168,85,247,0.15)] flex flex-col gap-3 hover:scale-[1.03] hover:border-purple-400 transition-all duration-300 w-[230px]">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Brain className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-semibold text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                AI / ML
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI &amp; ML Systems</h4>
              <p className="text-[11px] text-[#D7E2EA]/60 font-light mt-0.5">LLM Agents, OCR &amp; BERT NLP</p>
            </div>
            <div className="px-2.5 py-1 rounded-xl bg-black/60 border border-white/10 text-[10px] font-mono text-purple-300 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-purple-400" />
              <span>Accuracy: 98.4%</span>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* Card 3: Bottom Left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 left-4 xl:left-12 2xl:left-24 z-10 hidden lg:block"
      >
        <FadeIn delay={0.25} x={-40} y={0} duration={0.8}>
          <div className="group relative p-5 rounded-3xl border border-pink-500/40 bg-[#121212]/95 backdrop-blur-xl shadow-[0_15px_35px_rgba(236,72,153,0.2)] flex flex-col gap-3 hover:scale-[1.03] hover:border-pink-400 transition-all duration-300 w-[240px]">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-400">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-semibold text-pink-400 px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                Aesthetics
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Color Theory</h4>
              <p className="text-[11px] text-[#D7E2EA]/60 font-light mt-0.5">Contrast Ratios &amp; Palette Harmony</p>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[9px] uppercase font-mono text-pink-300/80">
                <span>Palette System</span>
                <span className="text-white font-bold">4.5:1 AAA</span>
              </div>
              <div className="h-3.5 w-full rounded-lg overflow-hidden flex border border-white/10 p-0.5 bg-black/40">
                <span className="h-full w-1/5 bg-[#0C0C0C] rounded-l" title="#0C0C0C" />
                <span className="h-full w-1/5 bg-[#B600A8]" title="#B600A8" />
                <span className="h-full w-1/5 bg-[#7621B0]" title="#7621B0" />
                <span className="h-full w-1/5 bg-[#BE4C00]" title="#BE4C00" />
                <span className="h-full w-1/5 bg-[#D7E2EA] rounded-r" title="#D7E2EA" />
              </div>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* Card 4: Bottom Right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-16 right-4 xl:right-12 2xl:right-24 z-10 hidden lg:block"
      >
        <FadeIn delay={0.3} x={40} y={0} duration={0.8}>
          <div className="group relative p-5 rounded-3xl border border-amber-500/40 bg-[#121212]/95 backdrop-blur-xl shadow-[0_15px_35px_rgba(245,158,11,0.2)] flex flex-col gap-3 hover:scale-[1.03] hover:border-amber-400 transition-all duration-300 w-[240px]">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-400">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-semibold text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                Structure
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Visual Hierarchy</h4>
              <p className="text-[11px] text-[#D7E2EA]/60 font-light mt-0.5">Scale, Alignment &amp; Layout Depth</p>
            </div>
            <div className="p-2 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="h-1.5 w-3/4 bg-amber-400/80 rounded" />
              <div className="h-1.5 w-1/2 bg-[#D7E2EA]/40 rounded" />
              <div className="flex items-center justify-between pt-0.5">
                <span className="text-[9px] font-mono text-amber-300/80 uppercase">Ratio 1.618</span>
                <Eye className="w-3 h-3 text-amber-400" />
              </div>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* CENTRAL MAIN CONTENT CONTAINER */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl w-full my-auto space-y-8">
        {/* Top Subtitle Tagline */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-[#B600A8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer &amp; Visual Strategist</span>
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Description Paragraph */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedText
            text={aboutBioText}
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[720px] mx-auto text-center break-normal whitespace-normal"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
          />
        </div>

        {/* Contact CTA Button */}
        <FadeIn delay={0.3} y={20} className="pt-2">
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>

      {/* TABLET & MOBILE RESPONSIVE CARD SHOWCASE */}
      <div className="w-full max-w-3xl mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden relative z-20 px-2">
        <div className="p-4 rounded-3xl border border-cyan-500/30 bg-[#121212]/90 backdrop-blur-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-4 h-4" /> Clean Code
            </div>
            <span className="text-[10px] text-cyan-400 font-mono">200 OK</span>
          </div>
          <p className="text-[11px] text-[#D7E2EA]/60 font-light">Java, Python &amp; React Architecture</p>
        </div>

        <div className="p-4 rounded-3xl border border-purple-500/30 bg-[#121212]/90 backdrop-blur-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Brain className="w-4 h-4" /> AI &amp; ML Systems
            </div>
            <span className="text-[10px] text-purple-400 font-mono">98.4%</span>
          </div>
          <p className="text-[11px] text-[#D7E2EA]/60 font-light">LLM Agents, OCR &amp; BERT NLP</p>
        </div>

        <div className="p-4 rounded-3xl border border-pink-500/30 bg-[#121212]/90 backdrop-blur-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
              <Palette className="w-4 h-4" /> Color Theory
            </div>
            <span className="text-[10px] text-pink-400 font-mono">AAA 4.5:1</span>
          </div>
          <p className="text-[11px] text-[#D7E2EA]/60 font-light">Contrast Ratios &amp; Palette Harmony</p>
        </div>

        <div className="p-4 rounded-3xl border border-amber-500/30 bg-[#121212]/90 backdrop-blur-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <LayoutGrid className="w-4 h-4" /> Visual Hierarchy
            </div>
            <span className="text-[10px] text-amber-400 font-mono">1.618</span>
          </div>
          <p className="text-[11px] text-[#D7E2EA]/60 font-light">Scale, Alignment &amp; Layout Depth</p>
        </div>
      </div>
    </section>
  );
};
