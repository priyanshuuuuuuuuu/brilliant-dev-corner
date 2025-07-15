
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2016 - 2018',
      gpa: '3.9/4.0',
      description: 'Specialized in Machine Learning and Software Engineering. Thesis on distributed systems optimization.',
      courses: ['Advanced Algorithms', 'Machine Learning', 'Distributed Systems', 'Software Engineering'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2012 - 2016',
      gpa: '3.8/4.0',
      description: 'Foundation in computer science principles, software development, and system design. Active in coding competitions.',
      courses: ['Data Structures', 'Operating Systems', 'Database Systems', 'Web Development'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      icon: '🔧'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      icon: '⚙️'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2021',
      icon: '🍃'
    }
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Academic foundation and professional certifications that drive my expertise in software development.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.degree}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-medium mb-1">
                          {edu.school}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex flex-col text-right mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="text-sm font-medium text-green-600">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-green-600" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{cert.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-600">
                          {cert.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Skills */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Continuous Learning
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I believe in lifelong learning and stay updated with the latest technologies 
                  through online courses, workshops, and hands-on projects. Currently exploring 
                  Web3 technologies and advanced AI/ML concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
