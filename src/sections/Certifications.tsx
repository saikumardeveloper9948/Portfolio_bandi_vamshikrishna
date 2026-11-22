import { motion } from 'motion/react';
import { Award, GraduationCap, FileText, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications, achievements, workshops } from '@/data/certifications';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './Certifications.css';

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="certifications" className="section certifications" ref={ref} aria-labelledby="certifications-title">
      <div className="section-header">
        <motion.h2
          id="certifications-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Certifications & Achievements
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Recognized credentials and awards demonstrating commitment to continuous learning 
          and excellence in mechanical engineering.
        </motion.p>
      </div>

      <motion.div
        className="cert-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {/* Certifications */}
        <motion.div
          className="cert-category"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          <div className="category-header">
            <div className="category-icon" style={{ background: 'rgba(163, 230, 53, 0.15)', color: '#a3e635' }}>
              <Award size={24} />
            </div>
            <div>
              <h3 className="category-title">Certifications</h3>
              <p className="category-count">{certifications.length} certification(s)</p>
            </div>
          </div>

          <div className="cert-list">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.name}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
              >
                <div className="cert-icon">
                  <FileText size={22} />
                </div>
                <div className="cert-content">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-year">
                      <GraduationCap size={12} /> {cert.year}
                    </span>
                    {cert.score && (
                      <span className="cert-score">
                        <Star size={12} /> Score: {cert.score}
                      </span>
                    )}
                  </div>
                </div>
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Verify ${cert.name} certification`}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="cert-category"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        >
          <div className="category-header">
            <div className="category-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
              <Star size={24} />
            </div>
            <div>
              <h3 className="category-title">Achievements</h3>
              <p className="category-count">{achievements.length} award(s)</p>
            </div>
          </div>

          <div className="cert-list">
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement.title}
                className="cert-card achievement-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
              >
                <div className="cert-icon achievement-icon">
                  <CheckCircle size={22} />
                </div>
                <div className="cert-content">
                  <h4 className="cert-name">{achievement.title}</h4>
                  <p className="cert-issuer">{achievement.description}</p>
                  <div className="cert-meta">
                    <span className="cert-year">
                      <GraduationCap size={12} /> {achievement.year}
                    </span>
                    <span className="cert-level">
                      <span className={`level-badge ${achievement.level}`}>{achievement.level}</span>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Workshops */}
      <motion.div
        className="workshops-section"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
      >
        <div className="category-header">
          <div className="category-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}>
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="category-title">Workshops & Training</h3>
            <p className="category-count">{workshops.length} workshop(s)</p>
          </div>
        </div>

        <div className="workshops-grid">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.name}
              className="workshop-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              <div className="workshop-icon">
                <FileText size={24} />
              </div>
              <div className="workshop-content">
                <h4 className="workshop-name">{workshop.name}</h4>
                <p className="workshop-issuer">{workshop.issuer}</p>
                <span className="workshop-date">{workshop.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}