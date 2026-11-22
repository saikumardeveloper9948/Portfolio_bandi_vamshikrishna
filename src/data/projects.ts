import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'theo-jansen-mechanism',
    title: 'Theo Jansen Mechanism – 4 Legs Spider Bot',
    description: 'Bio-inspired walking mechanism implementing Theo Jansen\'s linkage system for a 4-legged robotic spider.',
    longDescription: [
      'Designed and simulated a 4-legged walking robot based on Theo Jansen\'s linkage mechanism',
      'Created 3D models in Siemens NX and performed kinematic analysis of the linkage system',
      'Optimized link lengths for smooth walking gait using motion simulation in Simcenter 3D',
      'Fabricated prototype using 3D printing and tested walking performance on various terrains',
      'Analyzed stress distribution on critical joints under dynamic loading conditions',
    ],
    technologies: ['Siemens NX', 'Simcenter 3D', 'Motion Simulation', '3D Printing', 'Kinematic Analysis'],
    featured: true,
  },
  {
    id: 'heat-transfer-exhaust-manifold',
    title: 'Analysis of Enhancement of Heat Transfer in 4-Stroke Engine Exhaust Manifold with Fins',
    description: 'Thermal analysis and optimization of exhaust manifold with extended surfaces (fins) for improved heat dissipation.',
    longDescription: [
      'Conducted steady-state thermal analysis of 4-stroke engine exhaust manifold using ANSYS Workbench',
      'Designed and modeled various fin configurations (rectangular, triangular, pin fins) on manifold surface',
      'Compared temperature distribution and heat flux for baseline vs. finned manifold designs',
      'Achieved 18-22% improvement in heat dissipation with optimized fin geometry',
      'Validated results with analytical calculations and presented findings in final year project',
    ],
    technologies: ['ANSYS Workbench', 'ANSYS APDL', 'Thermal Analysis', 'CFD', 'Heat Transfer'],
    featured: true,
  },
  {
    id: 'structural-thermal-fins',
    title: 'Structural and Steady State Thermal Analysis of Fins Using ANSYS',
    description: 'Coupled structural-thermal analysis of cooling fins under combined thermal and mechanical loading.',
    longDescription: [
      'Performed coupled structural-thermal analysis of fin arrays using ANSYS APDL and Workbench',
      'Modeled temperature-dependent material properties and thermal expansion effects',
      'Analyzed von Mises stress distribution and thermal deformation under operating conditions',
      'Optimized fin thickness and spacing for maximum heat transfer with minimum structural weight',
      'Generated comprehensive FEA reports with contour plots and safety factor calculations',
    ],
    technologies: ['ANSYS APDL', 'ANSYS Workbench', 'Structural Analysis', 'Thermal-Structural Coupling', 'FEA'],
    featured: true,
  },
];