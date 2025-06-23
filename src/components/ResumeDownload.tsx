
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    
    const resumeUrl = 'https://drive.google.com/file/d/1uIEtB46xjG3CYyilLroF7LI6-rrGou35/view?usp=drive_link';
    window.open(resumeUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Download My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements in data analysis and business intelligence
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 opacity-5"></div>
                <motion.div
                  className="absolute top-8 right-8 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-full opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-24 h-24 bg-teal-200 dark:bg-teal-700 rounded-full opacity-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Resume Preview */}
                    <motion.div
                      className="space-y-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <div className="flex items-center justify-center mb-4">
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <FileText className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                          Professional Resume
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                          Comprehensive 1-page resume highlighting 1+ years of data analysis experience
                        </p>
                      </div>

                      {/* Resume Highlights */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What's Included:</h4>
                        <div className="space-y-2">
                          {[
                            'Professional Experience & Achievements',
                            'Technical Skills & Certifications',
                            'Education & Academic Excellence',
                            'Key Projects & Impact Metrics',
                            'Contact Information & References'
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Side - Download Action */}
                    <motion.div
                      className="text-center space-y-6"
                      variants={itemVariants}
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Ready to Learn More?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Download my complete resume to see detailed information about my experience, 
                          projects, and the value I can bring to your organization.
                        </p>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        onClick={handleDownload}
                        className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          initial={false}
                        />
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        <span>Download Resume</span>
                        <ExternalLink className="w-4 h-4 opacity-70" />
                      </motion.button>

                      {/* Additional Info */}
                      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                        <p>📄 PDF Format • 📊 1 Page • 🔄 Updated March 2025</p>
                        <p>File opens in Google Drive for secure viewing</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
                        {[
                          { number: '1+', label: 'Years Experience' },
                          { number: '10+', label: 'Projects Completed' },
                          { number: '15+', label: 'Technologies' }
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            className="text-center"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                            viewport={{ once: true }}
                          >
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Interested in Working Together?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                After reviewing my resume, let's discuss how I can help drive your data initiatives forward.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>Get in Touch</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownload;