
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Craftsman'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentText === texts[currentIndex]) {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setCurrentText('');
        }, 2000);
      } else {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, texts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
                Alex Johnson
              </h1>
              <div className="h-12 lg:h-16">
                <p className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate developer creating innovative solutions with modern technologies. 
              I transform ideas into elegant, scalable applications that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-card backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-border"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-foreground" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary to-accent p-2 shadow-2xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Johnson"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/60 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/60 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
