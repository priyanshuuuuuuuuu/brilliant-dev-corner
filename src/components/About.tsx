
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that bridge the gap between design and functionality. 
                My journey in tech started with curiosity and has evolved into a love for 
                crafting clean, efficient code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and enjoy working on projects 
                that challenge me to learn and grow. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open-source projects, or 
                sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Projects Completed', value: '50+' },
                  { label: 'Years Experience', value: '5+' },
                  { label: 'Technologies', value: '20+' },
                  { label: 'Happy Clients', value: '30+' }
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-4 bg-card rounded-xl border border-border">
                    <div className="text-2xl font-bold text-foreground">{value}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 backdrop-blur-sm shadow-xl border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
                    alt="Working on laptop"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/60 rounded-full blur-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/60 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
