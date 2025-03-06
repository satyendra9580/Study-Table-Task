
import { motion } from "framer-motion";

const PracticeFeature = () => {
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
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlimited Practice session</h2>
          <p className="text-lg text-gray-600 mb-8">
            For topics and subjects you go through in your school and coaching every day, we create instant
            practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20
            questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our AI-powered advantages:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 text-center leading-5 text-gray-600">✓</span>
                <span>Personalized question sets based on your learning patterns</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 text-center leading-5 text-gray-600">✓</span>
                <span>Instant explanations that help you understand concepts</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 text-center leading-5 text-gray-600">✓</span>
                <span>Difficulty adjustment based on your performance</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 text-center leading-5 text-gray-600">✓</span>
                <span>Track your progress and identify weak areas</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative">
          <img 
            src="./public/assets/Group.png" 
            alt="Practice session with STUDYtable" 
            className="w-full h-auto rounded-lg"
          />
          
          <div className="absolute -top-10 right-0 bg-white p-4 rounded-xl shadow-lg max-w-xs animate-float">
            <div className="flex space-x-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <p className="text-sm text-gray-800">Did you get the concept?</p>
            <div className="mt-3 border-t border-gray-100 pt-2">
              <p className="text-xs text-gray-600 italic">Yes, it's based on the principle of the maximum height of a projectile.</p>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-20 bg-white p-3 rounded-xl shadow-lg max-w-xs">
            <p className="text-sm text-gray-800">That's correct.</p>
          </div>
          
          <div className="absolute -bottom-6 left-10 bg-white p-3 rounded-xl shadow-lg max-w-xs">
            <p className="text-sm text-gray-800 font-mono">Okay, Hmax=u²/2g or us²sin²θ/2g</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PracticeFeature;
