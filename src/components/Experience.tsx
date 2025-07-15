
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading a team of 5 developers in building scalable web applications. Architected microservices infrastructure serving 100k+ users.',
      achievements: ['Reduced load times by 40%', 'Implemented CI/CD pipelines', 'Mentored junior developers'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies. Collaborated with design and product teams.',
      achievements: ['Built 10+ client applications', 'Improved code coverage to 90%', 'Led technical interviews'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Created responsive web applications and landing pages for various clients. Focused on performance optimization and user experience.',
      achievements: ['Delivered 20+ projects', 'Achieved 95+ PageSpeed scores', 'Implemented accessibility standards'],
      color: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Junior Web Developer',
      company: 'WebDev Studio',
      location: 'Denver, CO',
      period: '2018 - 2019',
      description: 'Started my professional journey building WordPress sites and learning modern JavaScript frameworks. Gained experience in full development lifecycle.',
      achievements: ['Completed 30+ WordPress sites', 'Learned React and Node.js', 'Contributed to open source'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              My professional journey through various roles and companies, building expertise in modern web development.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg relative z-10`}></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-card backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-primary">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:text-right space-y-1 mt-2 sm:mt-0">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Key Achievements:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mr-2 flex-shrink-0`}></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
