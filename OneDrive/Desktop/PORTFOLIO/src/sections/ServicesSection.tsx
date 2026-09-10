import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    name: 'AI & LLM Workflows',
    description:
      'Building AI-powered workflows using n8n, Gemini & OpenAI APIs, prompt engineering, and automated response systems for intelligent decision making.',
  },
  {
    number: '02',
    name: 'Full Stack Web Apps',
    description:
      'Developing end-to-end web applications with React.js, SpringBoot, Hibernate, Java Servlets/JSP, MySQL, and modern responsive frontend frameworks.',
  },
  {
    number: '03',
    name: 'Intelligent Document Processing',
    description:
      'Automating handwritten text extraction and semantic grading using Python, Flask, Tesseract OCR, BERT, NLP, and machine learning models.',
  },
  {
    number: '04',
    name: 'Database & Backend Systems',
    description:
      'Architecting robust backend services, RESTful APIs, relational MySQL schemas, and object-relational mapping for seamless enterprise data.',
  },
  {
    number: '05',
    name: 'Machine Learning & Analytics',
    description:
      'Applying Python data libraries like NumPy, Pandas, Scikit-learn, and vector similarity algorithms for predictive analysis and automated scoring.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-white text-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase tracking-tight text-center text-[#0C0C0C] mb-12 sm:mb-20 md:mb-28 select-none"
            style={{ fontSize: 'clamp(2rem, 8vw, 130px)', lineHeight: 1 }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-3 sm:gap-8">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none min-w-[80px] sm:min-w-[160px]"
                  style={{ fontSize: 'clamp(2rem, 7.5vw, 130px)' }}
                >
                  {service.number}
                </div>

                {/* Name & Description Stacked */}
                <div className="flex flex-col gap-1.5 sm:gap-2 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(0.95rem, 2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/70"
                    style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
