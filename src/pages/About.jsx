
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - STUDYtable";
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

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started researching the challenges faced by students during the pandemic."
    },
    {
      year: "2021",
      title: "Research Phase",
      description: "Conducted extensive studies with students and educators to understand learning patterns."
    },
    {
      year: "2022",
      title: "Algorithm Development",
      description: "Created our AI-based learning algorithm focused on personalized education."
    },
    {
      year: "2023",
      title: "Beta Launch",
      description: "Released STUDYtable to select schools and coaching centers for testing."
    },
    {
      year: "2024",
      title: "Full Launch",
      description: "Officially launched STUDYtable for all students across the country."
    }
  ];

  const team = [
    {
      name: "Satyendra Singh",
      role: "Founder & Education Expert",
      bio: "Former Professor with 15+ years of experience in education technology."
    },
    {
      name: "Sagar Gupta",
      role: "AI Research Lead",
      bio: "PhD in Machine Learning with a focus on educational AI systems."
    },
    {
      name: "Raunak Prajapati",
      role: "Product Development",
      bio: "Education enthusiast with expertise in building learning platforms."
    },
    {
      name: "Rohit Choudhary",
      role: "Student Experience",
      bio: "Former teacher passionate about improving learning outcomes."
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <section className="px-4 md:px-12 lg:px-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we built STUDYtable to revolutionize education and provide personalized learning for every student.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How we come to this?</h2>
              <p className="text-gray-600 mb-6">
                We observed and researched for three years in a variety of student environments.
                We found that the best students need more attention to excel further, while struggling 
                students need more support to improve their own abilities.
              </p>
              <p className="text-gray-600 mb-6">
                All students need personal attention. Based on the notion of "Personal attention" 
                we have built our algorithm and AI tutor to cater to each child uniquely.
              </p>
              <p className="text-gray-600">
                Our mission is to democratize quality education and make personalized learning 
                accessible to every student, regardless of their background or resources.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="order-first md:order-last">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative shadow-xl">
                <img 
                  src="./public/assets/Frame1.png" 
                  alt="STUDYtable team working" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm font-medium mb-1">Our Research</div>
                  <div className="text-xl font-bold">Transforming Education</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Journey</motion.h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-1/2 px-6">
                      <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        <div className="text-3xl font-bold text-blue-600 mb-1">{item.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md">
                      {index + 1}
                    </div>
                    
                    <div className="w-1/2 px-6"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Values</motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student First</h3>
                <p className="text-gray-600">
                  We prioritize student needs above everything else, making education more accessible.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in our content, platform, and services to help students succeed.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to create better learning experiences and outcomes.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Empathy</h3>
                <p className="text-gray-600">
                  We understand the challenges students face and design solutions with empathy.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="px-4 md:px-12 lg:px-24 py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're on a mission to transform education and help students achieve their full potential.
            Join us in this journey to make quality education accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="button-primary">Become a Partner</a>
            <a href="#" className="button-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
