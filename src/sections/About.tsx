import { motion } from 'motion/react';
import { GraduationCap, Award, TrendingUp, BarChart3, Mail, Phone } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';
import './About.css';

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [roleIndex, setRoleIndex] = useState(0);
  const charIndexRef = useRef(0);
  const typeIntervalRef = useRef<number | null>(null);
  const roleDescriptions = [
    'CAE Simulation Specialist',
    'Manufacturing Engineer',
    'Product Design Engineer',
    'Design Engineer',
    'Analysis Engineer'
  ];

  useEffect(() => {
    if (!isVisible) return;

    const role = roleDescriptions[roleIndex];
    charIndexRef.current = 0;

    typeIntervalRef.current = setInterval(() => {
      if (charIndexRef.current <= role.length) {
        charIndexRef.current++;
      } else {
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current);
        }
        setTimeout(() => {
          setRoleIndex(prev => (prev + 1) % roleDescriptions.length);
        }, 2000);
      }
    }, 50);

    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
    };
  }, [isVisible, roleIndex]);

  return (
    <section id="about" className="section about" ref={ref} aria-labelledby="about-title">
      {/* Mechanical Theme Background - 3D Animated Gears */}
      <div className="mechanical-gear" aria-hidden="true" />
      <div className="mechanical-gear" aria-hidden="true" />
      <div className="mechanical-gear" aria-hidden="true" />
      <div className="mechanical-gear" aria-hidden="true" />
      
      <div className="about-grid">
        <div className="about-content">
          <motion.h2
            id="about-title"
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            <p className="lead">
              I'm a passionate mechanical engineering graduate with hands-on experience 
              in design, simulation, and manufacturing technologies.
            </p>
            
            <p>
              Through my academic journey at VNR VJIET, Hyderabad, and diverse internship 
              experiences across Siemens, Growth Accelerator Technologies, and Bajaj Auto, 
              I've developed expertise in CAE simulation, product design, and manufacturing 
              processes.
            </p>
            
            <p>
              My core competencies span advanced CAD/CAE tools including Siemens NX, 
              Simcenter 3D, ANSYS, AutoCAD, Fusion 360, and CATIA. I specialize in 
              thermal and structural analysis, finite element modeling, and design 
              optimization for real-world applications.
            </p>
            
            <p>
              I'm passionate about solving complex engineering challenges through 
              innovative design approaches and leveraging cutting-edge simulation 
              technologies to create efficient, robust solutions.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          >
            <HighlightCard
              icon={GraduationCap}
              value="B.Tech"
              label="Mechanical Engineering"
            />
            <HighlightCard
              icon={Award}
              value="8.32"
              label="CGPA"
            />
            <HighlightCard
              icon={TrendingUp}
              value="3"
              label="Internships"
            />
            <HighlightCard
              icon={BarChart3}
              value="6+"
              label="Tools Proficient"
            />
          </motion.div>
        </div>

        <div className="about-sidebar">
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="profile-avatar">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <img 
                  src="/profile.jpg" 
                  alt="Bandi Vamshi Krishna - Mechanical Engineer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'flex items-center justify-center w-full h-full text-accent-primary';
                    placeholder.innerHTML = '<span class="text-4xl">👨‍🔧</span>';
                    target.parentElement?.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">{personalInfo.name}</h3>
              <p className="profile-title">{personalInfo.title}</p>
              <p className="profile-location">{personalInfo.location}</p>
            </div>
            
            <div className="profile-details">
              <DetailItem icon={Mail} value={personalInfo.email} label="Email" />
              <DetailItem icon={Phone} value={personalInfo.phone} label="Phone" />
            </div>
          </motion.div>

          <motion.div
            className="education-summary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="sidebar-title">Education</h3>
            {educationHistory.map((edu) => (
              <EduItem key={edu.institution} item={edu} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: React.ComponentType<{ size?: number }>; 
  value: string | number; 
  label: string 
}) {
  return (
    <motion.div
      className="highlight-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="highlight-icon">
        <Icon size={20} />
      </div>
      <div className="highlight-info">
        <span className="highlight-value">{value}</span>
        <span className="highlight-label">{label}</span>
      </div>
    </motion.div>
  );
}

function DetailItem({ icon: Icon, value, label }: { icon: React.ComponentType<{ size?: number }>; value: string; label: string }) {
  return (
    <div className="detail-item">
      <Icon size={16} />
      <span>{label}: {value}</span>
    </div>
  );
}

interface EduItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

const educationHistory: EduItem[] = [
  {
    degree: 'B.Tech Mechanical Engineering',
    institution: 'VNR VJIET, Hyderabad',
    period: '2022 - 2026 (Expected)',
    grade: 'CGPA: 8.32/10'
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: 'JNTUH College of Engineering',
    period: '2019 - 2022',
    grade: 'CGPA: 8.33/10'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    period: '2017 - 2019',
    grade: 'GPA: 9.70/10'
  }
];

function EduItem({ item }: { item: EduItem }) {
  return (
    <div className="edu-item">
      <div className="edu-marker">
        <div className="edu-dot" />
      </div>
      <div className="edu-content">
        <div className="edu-degree">{item.degree}</div>
        <div className="edu-institution">{item.institution}</div>
        <div className="edu-meta">
          <span>{item.period}</span>
          {item.grade && <span className="edu-grade">{item.grade}</span>}
        </div>
      </div>
    </div>
  );
}
