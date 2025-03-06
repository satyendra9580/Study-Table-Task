
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart, Calendar, Target, Clipboard, ArrowUpRight } from "lucide-react";

const Assessment = () => {
  useEffect(() => {
    document.title = "Personalized Assessment - STUDYtable";
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

  const upcomingTests = [
    {
      title: "Physics Half-Yearly",
      date: "Oct 15, 2023",
      time: "10:00 AM",
      duration: "3 hours",
      syllabus: "Units 1-5",
      type: "School"
    },
    {
      title: "JEE Mock Test",
      date: "Oct 18, 2023",
      time: "09:00 AM",
      duration: "3 hours",
      syllabus: "Full Syllabus",
      type: "Competitive"
    },
    {
      title: "Chemistry Periodic Assessment",
      date: "Oct 20, 2023",
      time: "11:00 AM",
      duration: "2 hours",
      syllabus: "Organic Chemistry",
      type: "School"
    }
  ];

  const performanceMetrics = [
    { 
      name: "Physics", 
      score: 82, 
      improvement: "+12%",
      status: "improving"
    },
    { 
      name: "Chemistry", 
      score: 75, 
      improvement: "+8%",
      status: "improving"
    },
    { 
      name: "Mathematics", 
      score: 68, 
      improvement: "+5%",
      status: "improving"
    },
    { 
      name: "Biology", 
      score: 88, 
      improvement: "+15%",
      status: "improving"
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Personalized Assessment</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              We measure your learning differently. Not just comparing you among your classmates and peers
              rather, how much you have learnt and how much have your skills in each subject have grown.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Performance Analysis</h3>
              <p className="text-gray-600 text-sm">Detailed insights into your strengths and areas for improvement</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Scheduled Assessments</h3>
              <p className="text-gray-600 text-sm">Organized test schedules aligned with your curriculum</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Targeted Improvement</h3>
              <p className="text-gray-600 text-sm">Focused recommendations based on your assessment results</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <Clipboard className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Test Archive</h3>
              <p className="text-gray-600 text-sm">Access to all your past assessments and performance history</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6">Upcoming Assessments</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {upcomingTests.map((test, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">{test.title}</div>
                            <div className="text-sm text-gray-500">{test.syllabus}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>{test.date}</div>
                            <div className="text-sm text-gray-500">{test.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{test.duration}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              test.type === 'School' ? 'bg-blue-100 text-blue-800' : 
                              test.type === 'Competitive' ? 'bg-purple-100 text-purple-800' : 
                              'bg-green-100 text-green-800'
                            }`}>
                              {test.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href="#" className="text-blue-600 hover:text-blue-900">Prepare</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="space-y-6">
                  {performanceMetrics.map((subject, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{subject.name}</span>
                        <div className="flex items-center">
                          <span className="mr-2">{subject.score}%</span>
                          <span className={`text-xs ${
                            subject.status === 'improving' ? 'text-green-600' : 
                            subject.status === 'stable' ? 'text-blue-600' : 
                            'text-red-600'
                          }`}>
                            {subject.improvement}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            subject.score >= 80 ? 'bg-green-500' : 
                            subject.score >= 65 ? 'bg-blue-500' : 
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${subject.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link 
                    to="#" 
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800"
                  >
                    <span>View detailed analytics</span>
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6">Assessment Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Adaptive Testing</h3>
                <p className="text-gray-600">
                  Our AI adjusts the difficulty of questions based on your performance, ensuring the perfect challenge level.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                <p className="text-gray-600">
                  Get comprehensive insights into your performance across subjects, topics, and question types.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-600">
                  Track your progress over time and see how your skills develop with regular assessments.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Exam Simulation</h3>
                <p className="text-gray-600">
                  Practice in an environment that mimics real exams, helping you prepare for the actual test day.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🧩</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Concept Mastery</h3>
                <p className="text-gray-600">
                  Focus on understanding concepts rather than memorizing answers, building deeper knowledge.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-device Access</h3>
                <p className="text-gray-600">
                  Take assessments on any device, allowing you to study whenever and wherever you want.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to assess your knowledge?</h3>
                <p className="opacity-90">Take a personalized assessment to identify your strengths and weaknesses.</p>
              </div>
              <Link 
                to="#" 
                className="bg-white text-blue-600 hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium"
              >
                Start Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Assessment;
