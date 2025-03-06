
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-white">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          variants={itemVariants}
        >
          Crafted for your all academic needs
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Join thousands of students who have transformed their academic journey with our AI-powered learning platform.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
        >
          <Link 
            to="/practice" 
            className="inline-block button-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all"
          >
            Get your Entry
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={itemVariants}
        >
          <div className="p-4">
            <div className="text-3xl font-bold mb-2">98%</div>
            <p className="text-gray-600">Student satisfaction</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold mb-2">10k+</div>
            <p className="text-gray-600">Active students</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold mb-2">85%</div>
            <p className="text-gray-600">Score improvement</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p className="text-gray-600">Learning support</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
