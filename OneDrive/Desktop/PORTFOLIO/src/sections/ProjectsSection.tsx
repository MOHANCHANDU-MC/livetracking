import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  link: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  accentGlow: string;
  badgeColor: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'AI News Generator',
    category: 'AI WORKFLOW & AGENTS',
    description: 'Autonomous n8n workflow fetching live RSS AI news feeds, aggregating articles, and generating formatted HTML news summaries via Google Gemini LLM.',
    link: 'https://github.com/MOHANCHANDU-MC',
    col1Img1: '/images/ai_news/ai_news_workflow.png',
    col1Img2: '/images/ai_news/ai_news_llm_chain.png',
    col2Img: '/images/ai_news/ai_news_ui.png',
    accentGlow: 'from-[#B600A8]/30 to-[#7621B0]/20',
    badgeColor: 'text-[#B600A8] border-[#B600A8]/40 bg-[#B600A8]/10',
  },
  {
    number: '02',
    name: 'VELLORA – E-Commerce App',
    category: 'FULL STACK WEB SYSTEM',
    description: 'Full stack fashion store built with Java, JSP, Servlets, MySQL, user authentication, shopping cart & order checkout process.',
    link: 'https://github.com/MOHANCHANDU-MC',
    col1Img1: '/images/vellora/vellora_collection.png',
    col1Img2: '/images/vellora/vellora_product.png',
    col2Img: '/images/vellora/vellora_home.png',
    accentGlow: 'from-[#00F2FE]/20 to-[#4FACFE]/20',
    badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
  },
  {
    number: '03',
    name: 'Automated Paper Evaluation System',
    category: 'AI / OCR / NLP ENGINE',
    description: 'AI-powered subjective answer evaluation system using Python, Flask, Tesseract OCR, BERT Transformer models & Cosine Similarity scoring.',
    link: 'https://answer-evaluation-system.vercel.app/',
    col1Img1: '/images/paper_eval/paper_eval_upload.png',
    col1Img2: '/images/paper_eval/paper_eval_settings.png',
    col2Img: '/images/paper_eval/paper_eval_results.png',
    accentGlow: 'from-[#F59E0B]/20 to-[#BE4C00]/20',
    badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 px-3 sm:px-6 md:px-10 pt-16 sm:pt-24 pb-32 sm:pb-40 overflow-hidden border-t border-white/10"
    >
      {/* Section Header with Cinematic Sub-title */}
      <div className="w-full text-center mb-12 sm:mb-20 md:mb-24 space-y-3 sm:space-y-4">
        <FadeIn delay={0} y={30}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B600A8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase tracking-tight text-center leading-none select-none"
            style={{ fontSize: 'clamp(2rem, 8.5vw, 130px)' }}
          >
            Project
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <p className="text-[#D7E2EA]/70 font-light max-w-lg mx-auto text-[11px] sm:text-xs md:text-sm uppercase tracking-widest px-2">
            Scroll down to explore production systems, AI agent workflows, and full-stack web applications.
          </p>
        </FadeIn>
      </div>

      {/* Stacked Project Cards */}
      <div className="relative max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24 md:gap-28">
        {PROJECTS.map((project, index) => {
          const totalCards = PROJECTS.length;
          const targetScale = 1 - (totalCards - 1 - index) * 0.04;

          return (
            <CinematicProjectCard
              key={project.number}
              project={project}
              index={index}
              targetScale={targetScale}
              containerProgress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

interface CinematicProjectCardProps {
  project: Project;
  index: number;
  targetScale: number;
  containerProgress: any;
}

const CinematicProjectCard: React.FC<CinematicProjectCardProps> = ({
  project,
  index,
  targetScale,
  containerProgress,
}) => {
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  // Dedicated Card Scroll Progress for 3D Tilt & Parallax Image Motion
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardWrapperRef,
    offset: ['start end', 'end start'],
  });

  // Cinematic 3D Scroll Perspective Transforms
  const rotateX = useTransform(cardProgress, [0, 0.5, 1], [-6, 0, 4]);
  const cardY = useTransform(cardProgress, [0, 0.4, 1], [40, 0, -20]);
  const scale = useTransform(containerProgress, [index * 0.3, 1], [1, targetScale]);

  // Parallax Shift for Screenshots inside Card
  const parallaxY = useTransform(cardProgress, [0, 1], ['-5%', '5%']);
  const imageScale = useTransform(cardProgress, [0, 0.5, 1], [1.06, 1.0, 1.06]);

  return (
    <div
      ref={cardWrapperRef}
      className="sticky top-16 sm:top-20 md:top-28 h-auto md:h-[88vh] flex items-center justify-center perspective-[1200px]"
    >
      <motion.div
        style={{
          scale,
          rotateX,
          y: cardY,
          top: `${index * 24}px`,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full rounded-[28px] sm:rounded-[44px] md:rounded-[60px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-4 sm:p-6 md:p-9 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 group"
      >
        {/* Dynamic Backlight Ambient Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accentGlow} opacity-40 blur-3xl pointer-events-none group-hover:opacity-70 transition-opacity duration-700`}
        />

        {/* Top Meta Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Project Number */}
            <span
              className="hero-heading font-black leading-none select-none tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 85px)' }}
            >
              {project.number}
            </span>

            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                <span
                  className={`text-[9px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${project.badgeColor}`}
                >
                  {project.category}
                </span>
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D7E2EA]/60" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase text-[#D7E2EA] tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.link} label="Live Project" />
        </div>

        {/* Bottom Row: 2-Column Parallax Image Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch w-full flex-1">
          {/* Left Column (40% width -> 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Screenshot 1 */}
            <div
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[36px] border border-white/15 bg-[#141414] relative group/img"
              style={{ height: 'clamp(120px, 16vw, 220px)' }}
            >
              <motion.img
                style={{ y: parallaxY, scale: imageScale }}
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
            </div>

            {/* Screenshot 2 */}
            <div
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[36px] border border-white/15 bg-[#141414] relative group/img"
              style={{ height: 'clamp(140px, 22vw, 320px)' }}
            >
              <motion.img
                style={{ y: parallaxY, scale: imageScale }}
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
            </div>
          </div>

          {/* Right Column (60% width -> 7 cols) */}
          <div className="md:col-span-7 h-full">
            <div className="w-full h-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px] overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] border border-white/15 bg-[#141414] relative group/img">
              <motion.img
                style={{ y: parallaxY, scale: imageScale }}
                src={project.col2Img}
                alt={`${project.name} main feature`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              />

              {/* Gradient Vignette & Overlay Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                <div className="space-y-1.5 sm:space-y-2 max-w-xl">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B600A8]">
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Project Overview</span>
                  </div>
                  <p className="text-[11px] sm:text-sm md:text-base text-[#D7E2EA] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
