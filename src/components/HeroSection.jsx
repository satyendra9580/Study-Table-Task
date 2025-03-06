
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen pt-28 md:pt-32 px-4 md:px-12 lg:px-24 pb-16 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-gray-50 -z-10"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.div className="flex flex-wrap gap-2 mb-6" variants={item}>
            {["NEET", "JEE", "Tuition", "School Test", "Scholarship", "Boards"].map((tag, index) => (
              <motion.span 
                key={tag} 
                className="tag"
                variants={tagVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={item}
          >
            <span className="text-black">Optimize </span>
            <span className="text-gray-500">Your Performance For </span>
            <br />
            <span className="text-black">JEE, NEET, </span>
            <span className="text-gray-500">and </span>
            <span className="text-black">Boards</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl"
            variants={item}
          >
            Your personal AI-Tutor for all academic needs. Whether its school exam, 
            boards or competitive exams we plan, manage, and help you clear your 
            doubts instantly. For students of class 10th, 11th and 12th (CBSE) and 
            preparing for all medical or engineering entrance exams
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={item}
          >
            <Link to="/practice" className="button-primary flex items-center gap-2 group">
              Apply for admission
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/" className="button-secondary flex items-center gap-2 group">
              Sign In
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative"
          variants={item}
        >
          <div className="relative z-10">
            <img 
              src="./public/assets/frame.jpg" 
              alt="Student studying with STUDYtable" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="absolute top-1/4 right-0 transform translate-x-1/4 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg w-48 animate-float">
            <div className="flex flex-wrap gap-1 text-xs font-medium mb-1">
              <span className="bg-gray-100 px-2 py-1 rounded">NEET</span>
              <span className="bg-gray-100 px-2 py-1 rounded">JEE</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Boards</span>
            </div>
            <p className="text-sm text-gray-600">Your complete study solution</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
