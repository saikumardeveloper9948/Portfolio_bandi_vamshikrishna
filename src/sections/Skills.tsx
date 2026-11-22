import { motion } from 'motion/react';
import { Cpu, Box, Code2, Factory, Wrench } from 'lucide-react';
import { skills } from '@/data/skills';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useScrollAnimation';
import './Skills.css';

const skillCategories = [
  { key: 'cad', label: 'CAD Software', icon: Box, color: '#a3e635', description: '3D modeling, parametric design, assembly' },
  { key: 'cae', label: 'CAE & Simulation', icon: Cpu, color: '#22d3ee', description: 'FEA, CFD, thermal-structural analysis' },
  { key: 'manufacturing', label: 'Manufacturing', icon: Factory, color: '#f59e0b', description: 'Process planning, GD&T, production' },
  { key: 'programming', label: 'Programming', icon: Code2, color: '#a855f7', description: 'Automation, scripting, computation' },
  { key: 'tools', label: 'Engineering Tools', icon: Wrench, color: '#ef4444', description: 'Specialized software & methodologies' },
];

export function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const getCategorySkills = (category: string) => skills.filter(s => s.category === category);

  return (
    <section id="skills" className="section skills" ref={ref} aria-labelledby="skills-title">
      <div className="section-header">
        <motion.h2
          id="skills-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Proficient in industry-standard CAD/CAE tools with hands-on experience in simulation, 
          manufacturing processes, and engineering automation.
        </motion.p>
      </div>

      <motion.div
        className="skills-categories"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {skillCategories.map((category, catIndex) => {
          const categorySkills = getCategorySkills(category.key);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category.key}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ background: `${category.color}20`, color: category.color }}>
                  <category.icon size={22} />
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.label}</h3>
                  <p className="category-desc">{category.description}</p>
                </div>
              </div>

              <div className="skills-grid">
                {categorySkills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    accentColor={category.color}
                    index={skillIndex}
                    isVisible={isVisible}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="skills-legend"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="legend-label">Proficiency Level:</span>
        <div className="legend-bars">
          {[25, 50, 75, 100].map((level) => (
            <div key={level} className="legend-bar" style={{ width: `${level}%` }} />
          ))}
        </div>
        <span className="legend-label">Beginner to Expert</span>
      </motion.div>
    </section>
  );
}

interface SkillCardProps {
  skill: { name: string; proficiency: number };
  accentColor: string;
  index: number;
  isVisible: boolean;
  prefersReducedMotion: boolean;
}

function SkillCard({ skill, accentColor, index, isVisible, prefersReducedMotion }: SkillCardProps) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: `0 12px 40px ${accentColor}20` }}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.proficiency}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ delay: 0.5 + index * 0.05, duration: prefersReducedMotion ? 0.01 : 1.2, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}CC)` }}
        />
      </div>
      <div className="skill-bar-glow" style={{ background: accentColor }} />
    </motion.div>
  );
}
