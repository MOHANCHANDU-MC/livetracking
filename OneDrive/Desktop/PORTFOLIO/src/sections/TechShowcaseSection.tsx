import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Bot, Code2, Database, Brain, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

interface TechCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  skills: { name: string; level?: string }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'AI Agents & Automation',
    subtitle: 'LLMs, n8n & API Integrations',
    icon: <Bot className="w-6 h-6 text-[#B600A8]" />,
    accentColor: '#B600A8',
    skills: [
      { name: 'n8n Workflows' },
      { name: 'Gemini API' },
      { name: 'OpenAI API' },
      { name: 'AI Agents' },
      { name: 'Prompt Engineering' },
      { name: 'HTTP Requests' },
    ],
  },
  {
    title: 'Machine Learning & NLP',
    subtitle: 'Computer Vision, OCR & Transformers',
    icon: <Brain className="w-6 h-6 text-[#7621B0]" />,
    accentColor: '#7621B0',
    skills: [
      { name: 'Python (OOPS)' },
      { name: 'Flask' },
      { name: 'BERT NLP' },
      { name: 'Tesseract OCR' },
      { name: 'Scikit-learn' },
      { name: 'NumPy & Pandas' },
    ],
  },
  {
    title: 'Full-Stack Web Dev',
    subtitle: 'Frontend & Backend Architecture',
    icon: <Code2 className="w-6 h-6 text-[#BE4C00]" />,
    accentColor: '#BE4C00',
    skills: [
      { name: 'Java (Multithreading)' },
      { name: 'React.js' },
      { name: 'SpringBoot' },
      { name: 'Hibernate' },
      { name: 'JSP & Servlets' },
      { name: 'JavaScript & HTML5/CSS3' },
    ],
  },
  {
    title: 'Databases & Tools',
    subtitle: 'Storage, Versioning & Environments',
    icon: <Database className="w-6 h-6 text-[#3B82F6]" />,
    accentColor: '#3B82F6',
    skills: [
      { name: 'MySQL Database' },
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Eclipse IDE' },
      { name: 'Apache Tomcat' },
      { name: 'Figma Design' },
    ],
  },
];

export const TechShowcaseSection: React.FC = () => {
  return (
    <section id="skills" className="w-full bg-[#0C0C0C] py-20 px-5 sm:px-8 md:px-10 overflow-hidden border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B600A8]/30 bg-[#B600A8]/10 text-xs font-medium uppercase tracking-widest text-[#B600A8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Expertise</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} y={30}>
            <h2 className="hero-heading font-black uppercase tracking-tight text-center leading-none" style={{ fontSize: 'clamp(2.2rem, 8vw, 110px)' }}>
              Skills &amp; Tech Stack
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="text-[#D7E2EA]/70 font-light max-w-xl mx-auto text-sm sm:text-base uppercase tracking-wide">
              Empowering intelligent automation, machine learning models, and full-stack web applications.
            </p>
          </FadeIn>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <FadeIn key={cat.title} delay={0.15 * idx} y={30}>
              <div className="h-full rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#D7E2EA]/60 font-light uppercase tracking-wider">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#D7E2EA] font-medium tracking-wide hover:border-[#B600A8]/50 hover:bg-[#B600A8]/10 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#D7E2EA]/50 uppercase tracking-widest">
                  <span>Category {`0${idx + 1}`}</span>
                  <div className="flex items-center gap-1 text-[#B600A8]">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Active Domain</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Visual Showcase Feature Strip */}
        <FadeIn delay={0.4} y={30}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#18011F]/60 via-[#121212] to-[#18011F]/60 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B600A8]">
                <ShieldCheck className="w-4 h-4" />
                <span>Industry Experience</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Web Development Intern @ Apexplanet Software
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                Gained practical hands-on experience in HTML5, CSS3, and JavaScript concepts for building responsive e-commerce web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-xl font-bold text-white">B.Tech AI</div>
                <div className="text-xs text-[#D7E2EA]/60 uppercase">2022 – 2026</div>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-xl font-bold text-[#B600A8]">3+ Major</div>
                <div className="text-xs text-[#D7E2EA]/60 uppercase">AI &amp; Web Projects</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
