import { motion } from 'motion/react';
import { Download, Mail, ArrowRight, MousePointer2, ChevronDown } from 'lucide-react';
import { Linkedin, Github } from '@/components/BrandIcons';
import { personalInfo } from '@/data/personal';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useScrollAnimation';
import './Hero.css';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bandi_Vamshi_Krishna_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero" ref={ref} aria-labelledby="hero-title">
      <div className="hero-background">
        <div className="grid-background" />
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <EngineeringWireframe prefersReducedMotion={prefersReducedMotion} />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          <span className="badge-dot" aria-hidden="true" />
          <span>2026 Mechanical Engineering Graduate</span>
          <span className="badge-separator" aria-hidden="true" />
          <span>VNR VJIET, Hyderabad</span>
        </motion.div>

        <motion.h1
          id="hero-title"
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <span className="title-line">BANDI VAMSHI KRISHNA</span>
          <span className="title-line title-accent">Mechanical Engineer</span>
        </motion.h1>

        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.button
            className="btn btn-primary btn-lg"
            onClick={downloadResume}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Download resume PDF"
          >
            <Download size={18} /> Download Resume
          </motion.button>
          <motion.button
            className="btn btn-secondary btn-lg"
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} /> Get In Touch
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="social-link"
            aria-label="Email"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>

        <motion.button
          className="scroll-indicator"
          onClick={scrollToContact}
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to contact section"
          style={{ display: prefersReducedMotion ? 'none' : 'flex' }}
        >
          <ChevronDown size={24} />
          <span className="scroll-text">Scroll</span>
          <div className="scroll-mouse">
            <MousePointer2 size={16} />
          </div>
        </motion.button>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
      >
        <StatItem value="8.32" label="B.Tech CGPA" suffix="/10" />
        <StatItem value="8.33" label="Diploma CGPA" suffix="/10" />
        <StatItem value="9.70" label="SSC GPA" suffix="/10" />
        <StatItem value="3" label="Internships" />
      </motion.div>
    </section>
  );
}

function StatItem({ value, label, suffix = '' }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="stat-item">
      <div className="stat-value">
        <span>{value}</span>
        {suffix && <span className="stat-suffix">{suffix}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function EngineeringWireframe({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  if (prefersReducedMotion) return null;

  return (
    <motion.svg
      className="wireframe-svg"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ delay: 1, duration: 2 }}
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', pointerEvents: 'none' }}
    >
      <defs>
        <linearGradient id="wireframeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--color-accent-secondary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Theo Jansen inspired linkage */}
      <g stroke="url(#wireframeGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Main linkage structure */}
        <path d="M200 100 L200 180" />
        <path d="M200 180 L140 260" />
        <path d="M200 180 L260 260" />
        <path d="M140 260 L100 340" />
        <path d="M260 260 L300 340" />
        <path d="M100 340 L180 380" />
        <path d="M300 340 L220 380" />
        
        {/* Joints */}
        <circle cx="200" cy="100" r="4" fill="var(--color-accent-primary)" />
        <circle cx="200" cy="180" r="5" fill="var(--color-accent-primary)" />
        <circle cx="140" cy="260" r="4" fill="var(--color-accent-primary)" />
        <circle cx="260" cy="260" r="4" fill="var(--color-accent-primary)" />
        <circle cx="100" cy="340" r="3" fill="var(--color-accent-primary)" />
        <circle cx="300" cy="340" r="3" fill="var(--color-accent-primary)" />
        <circle cx="180" cy="380" r="3" fill="var(--color-accent-primary)" />
        <circle cx="220" cy="380" r="3" fill="var(--color-accent-primary)" />
        
        {/* Cross braces */}
        <path d="M140 260 L260 260" strokeDasharray="5,5" />
        <path d="M100 340 L300 340" strokeDasharray="5,5" />
      </g>
      
      {/* Rotating elements */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 100px' }}
      >
        <circle cx="200" cy="100" r="60" stroke="url(#wireframeGradient)" strokeWidth="1" fill="none" strokeDasharray="10,10" />
        <circle cx="200" cy="100" r="100" stroke="url(#wireframeGradient)" strokeWidth="0.5" fill="none" strokeDasharray="20,20" />
      </motion.g>
    </motion.svg>
  );
}