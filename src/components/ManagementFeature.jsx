
import { motion } from "framer-motion";

const ManagementFeature = () => {
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
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Managing students academic life</h2>
          <p className="text-lg text-gray-600">
            There is more to study than just practicing giving test. To meet the requirement of exam, we need to
            carefully do the revision, repeatedly align our study plan and to understand students own learning curve.
            This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So
            that you focus on learning and worry no more.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative">
            <img 
              src="./public/assets/frame7.png" 
              alt="Academic life management" 
              className="w-full h-auto rounded-lg"
            />
            
            <div className="absolute top-10 right-0 transform translate-x-1/4 flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">Revision</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">Exam</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">Break</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">Time</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">School</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">Homework</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl h-full">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-semibold">?</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">Should I revise?</p>
                  <p className="text-gray-700">Should I practice?</p>
                  <p className="text-gray-700">Should I do test?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm h-full">
            <div className="border-b border-gray-100 pb-3 mb-4">
              <h3 className="text-lg font-semibold">STUDYtable</h3>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-gray-50 p-2 text-center text-sm">Homework</div>
              <div className="bg-gray-50 p-2 text-center text-sm">Revision</div>
              <div className="bg-gray-50 p-2 text-center text-sm">Break</div>
              <div className="bg-gray-50 p-2 text-center text-sm">Time</div>
              <div className="bg-gray-50 p-2 text-center text-sm">School</div>
              <div className="bg-gray-50 p-2 text-center text-sm">Exam</div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <div>
                <p className="font-medium">Today's work!</p>
                <div className="mt-2 flex space-x-2">
                  <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                  <div className="h-1 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-1 w-4 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="bg-gray-900 text-white mt-16 md:mt-24 rounded-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              How we come to this?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              We observed and researched for three years in a variety of student.
              Where The best needs more attention to do better and the student
              struggling needs more attention to improve their own abilities. All
              students need personal attention. Based on the notion of "Personal
              attention" we have built our algorithm and Ai tutor to cater each
              children uniquely...
            </motion.p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
              variants={itemVariants}
            >
              <span>Read the full story</span>
              <svg xmlns="" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ManagementFeature;
