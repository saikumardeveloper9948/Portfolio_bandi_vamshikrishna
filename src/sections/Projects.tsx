import { motion } from 'motion/react';
import { ExternalLink, Code, Zap, Cpu, Box, FileText, ChevronRight } from 'lucide-react';
import { Github } from '@/components/BrandIcons';
import { projects } from '@/data/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './Projects.css';

const projectIcons = {
  'Siemens NX': Box,
  'Simcenter 3D': Cpu,
  'ANSYS Workbench': Code,
  'ANSYS APDL': Code,
  '3D Printing': Zap,
  'Motion Simulation': Zap,
  'Kinematic Analysis': Cpu,
  'Thermal Analysis': Cpu,
  'CFD': Cpu,
  'Heat Transfer': Cpu,
  'Structural Analysis': Cpu,
  'FEA': Cpu,
  'Thermal-Structural Coupling': Cpu,
};

export function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section projects" ref={ref} aria-labelledby="projects-title">
      <div className="section-header">
        <motion.h2
          id="projects-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Engineering projects demonstrating expertise in mechanism design, thermal analysis, 
          and structural simulation using industry-standard CAE tools.
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            isVisible={isVisible}
          />
        ))}
      </motion.div>

      <motion.div
        className="projects-cta"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="cta-text">Interested in collaborating or learning more about these projects?</p>
        <motion.a
          href="#contact"
          className="btn btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get In Touch
          <ChevronRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription: string[];
    technologies: string[];
    github?: string;
    demo?: string;
  };
  index: number;
  isVisible: boolean;
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div className="project-header">
        <div className="project-icon">
          <Code size={28} style={{ color: 'var(--color-accent-primary)' }} />
        </div>
        <div className="project-badges">
          <span className="badge featured">Featured</span>
          <span className="badge final-year">Final Year</span>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-details">
          {project.longDescription.map((detail, di) => (
            <motion.div
              key={di}
              className="detail-item"
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.5 + di * 0.08, duration: 0.3 }}
            >
              <span className="detail-bullet" />
              <span>{detail}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="project-tech">
        {project.technologies.map((tech, ti) => {
          const Icon = projectIcons[tech as keyof typeof projectIcons] || FileText;
          return (
            <motion.span key={ti} className="tech-tag" whileHover={{ scale: 1.05 }}>
              <Icon size={12} />
              {tech}
            </motion.span>
          );
        })}
      </div>

      <div className="project-links">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={16} />
            <span>Code</span>
            <ExternalLink size={12} />
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} demo`}
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}