import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Code2, Cpu, Box } from 'lucide-react';
import { Linkedin, Github } from '@/components/BrandIcons';
import { personalInfo } from '@/data/personal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './Footer.css';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" ref={ref} role="contentinfo">
      <div className="footer-background">
        <div className="grid-background" />
        <div className="glow-orb glow-orb-2" />
      </div>

      <div className="footer-content">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-text">B<span className="logo-accent">VK</span></span>
            </div>
            <p className="brand-tagline">
              Mechanical Engineer passionate about design, simulation, and manufacturing.
              Building efficient solutions through engineering excellence.
            </p>
            <div className="brand-social">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.1 }}
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
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                aria-label="Email"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4 className="link-title">Expertise</h4>
              <ul>
                <li><span className="tech-tag"><Box size={12} /> CAD Design</span></li>
                <li><span className="tech-tag"><Cpu size={12} /> CAE Simulation</span></li>
                <li><span className="tech-tag"><Code2 size={12} /> Programming</span></li>
                <li><span className="tech-tag"><Cpu size={12} /> FEA Analysis</span></li>
              </ul>
            </div>
            <div className="link-group">
              <h4 className="link-title">Connect</h4>
              <ul className="contact-links">
                <li>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail size={16} /> {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${personalInfo.phone}`}>
                    <Phone size={16} /> {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <span>
                    <MapPin size={16} /> {personalInfo.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="copyright">
            <p>&copy; {currentYear} Bandi Vamshi Krishna. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>
              Built with <Code2 size={14} /> React + TypeScript + Tailwind CSS + Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}