import './styles/style.scss';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;