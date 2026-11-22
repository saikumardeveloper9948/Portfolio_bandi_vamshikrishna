import type { Skill } from '@/types';

export const skills: Skill[] = [
  // CAD Software
  { name: 'Siemens NX', category: 'cad', proficiency: 90 },
  { name: 'CATIA V5', category: 'cad', proficiency: 85 },
  { name: 'AutoCAD', category: 'cad', proficiency: 92 },
  { name: 'Fusion 360', category: 'cad', proficiency: 88 },
  { name: 'SolidWorks', category: 'cad', proficiency: 75 },
  
  // CAE/Simulation
  { name: 'ANSYS Workbench', category: 'cae', proficiency: 85 },
  { name: 'ANSYS APDL', category: 'cae', proficiency: 80 },
  { name: 'Simcenter 3D', category: 'cae', proficiency: 88 },
  { name: 'Structural Analysis', category: 'cae', proficiency: 85 },
  { name: 'Thermal Analysis', category: 'cae', proficiency: 82 },
  
  // Manufacturing & Tools
  { name: 'Automation Studio', category: 'manufacturing', proficiency: 78 },
  { name: 'GD&T', category: 'manufacturing', proficiency: 82 },
  { name: 'Manufacturing Processes', category: 'manufacturing', proficiency: 80 },
  { name: 'Glass Lining Technology', category: 'manufacturing', proficiency: 75 },
  
  // Programming
  { name: 'C Programming', category: 'programming', proficiency: 80 },
  { name: 'Python (Basics)', category: 'programming', proficiency: 65 },
  { name: 'MATLAB', category: 'programming', proficiency: 60 },
];