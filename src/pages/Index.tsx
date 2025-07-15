
import { ThemeProvider } from '../components/ThemeProvider';
import ThemeToggle from '../components/ThemeToggle';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
