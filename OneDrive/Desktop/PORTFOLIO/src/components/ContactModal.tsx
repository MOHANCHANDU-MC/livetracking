import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Send, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
  </svg>
);

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-5 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#D7E2EA]/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-[#D7E2EA]" />
            </button>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight hero-heading mb-2">
              Let&apos;s Connect
            </h2>
            <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70 mb-8">
              Reach out for collaborations, AI agent developments, full stack projects, or technical opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#B600A8]/20 border border-[#B600A8]/40">
                    <Mail className="w-5 h-5 text-[#B600A8]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-medium tracking-wider opacity-60">Email</div>
                    <a href="mailto:mohanchandhmc@gmail.com" className="font-medium hover:text-[#B600A8] transition-colors">
                      mohanchandhmc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#7621B0]/20 border border-[#7621B0]/40">
                    <Phone className="w-5 h-5 text-[#7621B0]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-medium tracking-wider opacity-60">Phone</div>
                    <a href="tel:+919121790691" className="font-medium hover:text-[#7621B0] transition-colors">
                      +91 9121790691
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#BE4C00]/20 border border-[#BE4C00]/40">
                    <MapPin className="w-5 h-5 text-[#BE4C00]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-medium tracking-wider opacity-60">Location</div>
                    <div className="font-medium">Jammalamadugu, Andhra Pradesh</div>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="pt-4 flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/mohan-chandu-97149327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl border border-[#D7E2EA]/20 bg-white/5 flex items-center justify-center gap-2 hover:border-[#B600A8] transition-all"
                  >
                    <LinkedInIcon />
                    <span className="text-xs uppercase font-medium tracking-wider">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/MOHANCHANDU-MC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl border border-[#D7E2EA]/20 bg-white/5 flex items-center justify-center gap-2 hover:border-[#B600A8] transition-all"
                  >
                    <GitHubIcon />
                    <span className="text-xs uppercase font-medium tracking-wider">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Quick Message Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-green-500/40 text-center">
                    <Check className="w-12 h-12 text-green-400 mb-2" />
                    <h3 className="font-semibold text-lg text-white">Message Sent!</h3>
                    <p className="text-xs opacity-70 mt-1">Thank you for reaching out, Mohan will get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider opacity-70 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D7E2EA]/20 bg-black/40 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider opacity-70 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D7E2EA]/20 bg-black/40 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider opacity-70 mb-1">Message</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Mohan, let's talk about..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D7E2EA]/20 bg-black/40 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-medium uppercase tracking-widest text-white text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
