import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AgentTest } from '@/components/AgentTest';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Education } from '@/sections/Education';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Certifications } from '@/sections/Certifications';
import { Contact } from '@/sections/Contact';
import { useTheme } from '@/hooks/useTheme';
import './App.css';

function App() {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="loading-screen" aria-hidden="true">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <AgentTest />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
