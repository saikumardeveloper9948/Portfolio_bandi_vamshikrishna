import { motion } from 'motion/react';
import { GraduationCap, Award, School, BookOpen, TrendingUp } from 'lucide-react';
import { education } from '@/data/education';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './Education.css';

const educationDetails = [
  {
    type: 'btech',
    subjects: [
      'Engineering Mechanics', 'Strength of Materials', 'Thermodynamics',
      'Fluid Mechanics', 'Machine Design', 'Heat Transfer',
      'Manufacturing Technology', 'CAD/CAM', 'Finite Element Analysis',
      'Automobile Engineering', 'Mechatronics', 'Project Work'
    ],
    achievements: [
      'CGPA: 8.32/10',
      'Final Year Project: Thermal Analysis of Exhaust Manifold',
      'Best Draftman Award 2022 (College Level)'
    ]
  },
  {
    type: 'diploma',
    subjects: [
      'Engineering Drawing', 'Workshop Technology', 'Machine Drawing',
      'Thermal Engineering', 'Theory of Machines', 'Industrial Management',
      'CNC Programming', 'Metrology', 'Project Work'
    ],
    achievements: [
      'CGPA: 8.33/10',
      'Excellent in Engineering Drawing & CAD',
      'Workshop Technology Top Performer'
    ]
  },
  {
    type: 'ssc',
    subjects: [
      'Mathematics', 'Science', 'Social Studies',
      'English', 'Telugu', 'Hindi'
    ],
    achievements: [
      'GPA: 9.70/10',
      'Distinction in Mathematics & Science',
      'School Topper'
    ]
  }
];

export function Education() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="education" className="section education" ref={ref} aria-labelledby="education-title">
      <div className="section-header">
        <motion.h2
          id="education-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Strong academic foundation with consistent excellence from school through university, 
          specializing in mechanical engineering principles and applications.
        </motion.p>
      </div>

      <motion.div
        className="education-timeline"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {education.map((edu, index) => {
          const details = educationDetails.find(d => d.type === edu.type);
          return (
            <motion.div
              key={edu.type}
              className="edu-timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-ring" />
                <div className="marker-icon">
                  {edu.type === 'btech' && <GraduationCap size={20} />}
                  {edu.type === 'diploma' && <Award size={20} />}
                  {edu.type === 'ssc' && <School size={20} />}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="degree-badge">
                      {edu.type === 'btech' && <span>B.Tech</span>}
                      {edu.type === 'diploma' && <span>Diploma</span>}
                      {edu.type === 'ssc' && <span>SSC</span>}
                    </div>
                    <div className="grade-badge">
                      <TrendingUp size={14} /> {edu.grade}
                    </div>
                  </div>
                  
                  <h3 className="degree-title">{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  
                  <div className="meta-row">
                    <span className="meta-item">
                      <BookOpen size={14} /> {edu.location}
                    </span>
                    <span className="meta-item">
                      <TrendingUp size={14} /> {edu.year}
                    </span>
                  </div>

                  {details && (
                    <>
                      <div className="card-section">
                        <h4 className="section-label">Key Subjects</h4>
                        <div className="subjects-grid">
                          {details.subjects.map((subject, si) => (
                            <span key={si} className="subject-tag">{subject}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="card-section">
                        <h4 className="section-label">Achievements</h4>
                        <ul className="achievements-list">
                          {details.achievements.map((achievement, ai) => (
                            <li key={ai}>
                              <span className="achievement-dot" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}