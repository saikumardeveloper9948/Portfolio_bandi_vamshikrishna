import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Download, Mail, Phone } from 'lucide-react';
import { Linkedin, Github } from '@/components/BrandIcons';
import { useTheme } from '@/hooks/useTheme';
import { personalInfo } from '@/data/personal';
import './Navbar.css';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let current = '#hero';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <motion.a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Go to home"
        >
          <span className="logo-text">B<span className="logo-accent">VK</span></span>
          <span className="logo-subtitle">Mechanical Engineer</span>
        </motion.a>

        <div className="navbar-links-wrapper">
          <ul className="navbar-links" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <motion.a
                  href={link.href}
                  className={`navbar-link ${activeSection === link.href ? 'active' : ''}`}
                  role="menuitem"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      className="link-indicator"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="Bandi_Vamshi_Krishna_Resume.pdf"
              className="btn btn-primary navbar-cta"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(124, 252, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>
        </div>

        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="mobile-contact">
              <a href={`mailto:${personalInfo.email}`} className="mobile-contact-item">
                <Mail size={18} /> {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="mobile-contact-item">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="mobile-contact-item">
                <Github size={18} /> GitHub
              </a>
              <a href={`tel:${personalInfo.phone}`} className="mobile-contact-item">
                <Phone size={18} /> {personalInfo.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}