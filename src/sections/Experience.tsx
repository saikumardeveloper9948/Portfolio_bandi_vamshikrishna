import { motion } from 'motion/react';
import { Building2, Factory, Wrench, Car, Sparkles, ArrowUpRight } from 'lucide-react';
import { internships } from '@/data/internships';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './Experience.css';

const companyIcons = {
  'NIT Warangal & Siemens Center of Excellence': Building2,
  'Growth Accelerator Technologies Pvt. Ltd.': Factory,
  'Anika Bajaj (Bajaj Auto Authorized Service)': Car,
};

const companyColors = {
  'NIT Warangal & Siemens Center of Excellence': '#a3e635',
  'Growth Accelerator Technologies Pvt. Ltd.': '#f59e0b',
  'Anika Bajaj (Bajaj Auto Authorized Service)': '#ef4444',
};

export function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="experience" className="section experience" ref={ref} aria-labelledby="experience-title">
      <div className="section-header">
        <motion.h2
          id="experience-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Internship Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Diverse hands-on experience across design simulation, manufacturing technology, 
          and automobile service - building a comprehensive engineering skillset.
        </motion.p>
      </div>

      <motion.div
        className="experience-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {internships.map((internship, index) => {
          const Icon = companyIcons[internship.company as keyof typeof companyIcons] || Building2;
          const color = companyColors[internship.company as keyof typeof companyColors] || '#a3e635';
          
          return (
            <motion.div
              key={internship.company}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${color}20` }}
              style={{ '--card-accent': color } as React.CSSProperties}
            >
              <div className="card-header">
                <div className="company-icon" style={{ background: `${color}20`, color: color }}>
                  <Icon size={24} />
                </div>
                <div className="company-info">
                  <h3 className="company-name">{internship.company}</h3>
                  <p className="role-period">
                    <span className="role">{internship.role}</span>
                    <span className="period">{internship.period}</span>
                  </p>
                </div>
              </div>

              <div className="card-divider" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

              <div className="card-content">
                <h4 className="content-title">Key Responsibilities</h4>
                <ul className="responsibilities-list">
                  {internship.description.map((desc, di) => (
                    <li key={di}>
                      <span className="bullet" style={{ background: color }} />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <h4 className="content-title">Technologies & Tools</h4>
                <div className="tech-tags">
                  {internship.technologies.map((tech, ti) => (
                    <span key={ti} className="tech-tag" style={{ borderColor: `${color}60` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="experience-summary"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="summary-stats">
          <StatCard value="3" label="Internships" icon={Sparkles} color="#a3e635" />
          <StatCard value="12+" label="Months Experience" icon={Wrench} color="#22d3ee" />
          <StatCard value="3" label="Domains Covered" icon={ArrowUpRight} color="#f59e0b" />
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ value, label, icon: Icon, color }: { value: string; label: string; icon: React.ComponentType<{ size?: number }>; color: string }) {
  return (
    <div className="stat-card" style={{ '--stat-color': color } as React.CSSProperties}>
      <div className="stat-icon" style={{ background: `${color}20`, color }}>
        <Icon size={24} />
      </div>
      <div className="stat-value" style={{ color }}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}