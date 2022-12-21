import './styles/style.scss';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection'
import Contact from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <Contact />
    </div>
  );
}

export default App;