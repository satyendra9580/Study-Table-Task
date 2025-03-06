
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Practice = () => {
  useEffect(() => {
    document.title = "Practice Sessions - STUDYtable";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const subjects = [
    { 
      name: "Physics", 
      icon: "⚛️", 
      description: "Mechanics, Electromagnetism, Optics, Modern Physics",
      progress: 78,
      questionsSolved: 345,
      recommended: true
    },
    { 
      name: "Chemistry", 
      icon: "🧪", 
      description: "Organic, Inorganic, Physical Chemistry, Equilibrium",
      progress: 65,
      questionsSolved: 289,
      recommended: false
    },
    { 
      name: "Mathematics", 
      icon: "📐", 
      description: "Calculus, Algebra, Coordinate Geometry, Probability",
      progress: 82,
      questionsSolved: 412,
      recommended: true
    },
    { 
      name: "Biology", 
      icon: "🧬", 
      description: "Human Physiology, Plant Physiology, Genetics, Ecology",
      progress: 45,
      questionsSolved: 198,
      recommended: false
    }
  ];

  const recentSessions = [
    {
      subject: "Physics",
      topic: "Rotational Mechanics",
      date: "Yesterday",
      score: 85,
      duration: "45 min"
    },
    {
      subject: "Mathematics",
      topic: "Differential Calculus",
      date: "2 days ago",
      score: 92,
      duration: "60 min"
    },
    {
      subject: "Chemistry",
      topic: "Chemical Bonding",
      date: "3 days ago",
      score: 78,
      duration: "40 min"
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <section className="px-4 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Unlimited Practice Sessions</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Generate customized practice sessions based on your learning needs. Our AI algorithm will create
              the perfect set of questions to help you master each concept.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,244</div>
                <div className="text-gray-600">Questions Solved</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">72%</div>
                <div className="text-gray-600">Average Score</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">48 hrs</div>
                <div className="text-gray-600">Time Practiced</div>
              </div>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Subject Practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <motion.div 
                  key={subject.name}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{subject.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold">{subject.name}</h3>
                        <p className="text-gray-600 text-sm">{subject.description}</p>
                      </div>
                    </div>
                    {subject.recommended && (
                      <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">Recommended</span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{subject.questionsSolved} questions solved</span>
                    <Link 
                      to="#" 
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Practice Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6">Recent Practice Sessions</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentSessions.map((session, index) => (
                      <motion.tr 
                        key={index}
                        variants={itemVariants}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{session.subject}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{session.topic}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{session.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            session.score >= 90 ? 'bg-green-100 text-green-800' : 
                            session.score >= 75 ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {session.score}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{session.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href="#" className="text-blue-600 hover:text-blue-900">Review</a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Ready for a new practice session?</h3>
                <p className="text-gray-600">Our AI will create a personalized set of questions just for you.</p>
              </div>
              <Link 
                to="#" 
                className="button-primary"
              >
                Start Practice Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Practice;
