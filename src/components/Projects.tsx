
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and advanced reporting features.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Interactive dashboard displaying weather patterns and climate data with beautiful visualizations and forecasting.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile application with photo sharing, real-time messaging, and social networking features.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'AI Content Generator',
      description: 'Machine learning powered content creation tool with natural language processing and automated optimization.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      tech: ['Python', 'TensorFlow', 'React', 'Docker'],
      github: '#',
      demo: '#',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform built on blockchain technology with smart contracts and encryption.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: '#',
      demo: '#',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications and innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
