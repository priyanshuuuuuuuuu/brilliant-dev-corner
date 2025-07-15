
import { Code, Database, Globe, Smartphone, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Sass']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase']
    },
    {
      title: 'DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux']
    },
    {
      title: 'Tools',
      icon: Settings,
      color: 'from-gray-500 to-slate-500',
      skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack']
    },
    {
      title: 'Languages',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(({ title, icon: Icon, color, skills }) => (
              <div
                key={title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg text-sm font-medium text-gray-700 text-center hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
