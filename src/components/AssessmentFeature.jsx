
import { motion } from "framer-motion";

const AssessmentFeature = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="order-2 lg:order-1 relative">
          <img 
            src="./public/assets/frame1.png" 
            alt="Personalized Assessment in STUDYtable" 
            className="w-full h-auto rounded-lg"
          />
          
          <div className="absolute top-1/3 -left-8 bg-white p-4 rounded-xl shadow-lg w-48 animate-float">
            <div className="text-sm font-medium mb-2">One Place For All</div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-center space-x-1">
                <input type="checkbox" checked readOnly className="w-3 h-3" />
                <span>Scholarship Test</span>
              </li>
              <li className="flex items-center space-x-1">
                <input type="checkbox" checked readOnly className="w-3 h-3" />
                <span>JEE Test</span>
              </li>
              <li className="flex items-center space-x-1">
                <input type="checkbox" checked readOnly className="w-3 h-3" />
                <span>Tuition Test</span>
              </li>
              <li className="flex items-center space-x-1">
                <input type="checkbox" checked readOnly className="w-3 h-3" />
                <span>Board Test</span>
              </li>
              <li className="flex items-center space-x-1">
                <input type="checkbox" checked readOnly className="w-3 h-3" />
                <span>Unit Test</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Personalized Assessment</h2>
          <p className="text-lg text-gray-600 mb-8">
            We measure your learning differently. Not just comparing you among your classmates and peers
            rather, how much you have learnt and how much have your skills in each subject have grown. We create
            test based on your learning session and exam requirement to understand and modify study plan
            for you. The test are uniquely created for each student improve and advance their respective
            knowledge.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Assessment features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-medium">Progress Tracking</p>
                <p className="text-sm text-gray-600 mt-1">Monitor your growth over time with detailed analytics</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-medium">Weakness Identification</p>
                <p className="text-sm text-gray-600 mt-1">Pinpoint areas that need additional focus</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-medium">Smart Testing</p>
                <p className="text-sm text-gray-600 mt-1">Dynamically adjusts to your learning pace</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-medium">Exam Simulation</p>
                <p className="text-sm text-gray-600 mt-1">Practice under real test conditions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AssessmentFeature;
