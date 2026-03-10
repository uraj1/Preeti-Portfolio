import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, TrendingUp, Database, BarChart, Code, } from "lucide-react";
import Magnetic from "./Magnetic";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-16 pb-20"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 z-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Preeti Bhadouriya
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Database className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <h2 className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Digital Marketing Strategist
            </h2>
            <BarChart className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { label: "Performance Marketing", icon: TrendingUp },
              { label: "SEO & Growth", icon: BarChart },
              { label: "Data-Driven Campaigns", icon: Database },
              { label: "Brand Strategy", icon: Code },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full shadow-sm border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            I help brands grow through{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              performance marketing
            </span>
            ,{" "}
            <span className="font-medium text-teal-600 dark:text-teal-400">
              data-driven campaigns
            </span>
            , and{" "}
            <span className="font-medium text-purple-600 dark:text-purple-400">
              audience insights
            </span>
            . From leads to loyalty, I build marketing that scales
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto"
          >
            {[
              { value: "3×", label: "ROI Growth" },
              { value: "40%", label: "Conversion Lift" },
              { value: "1M+", label: "Audience Reach" },
              { value: "100+", label: "Campaigns Led" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Magnetic>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </Magnetic>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { Icon: Github, href: "https://github.com/preetithakur7742-sys", color: "text-gray-700 dark:text-gray-300" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/preetibhadouriya/", color: "text-blue-600" },
                { Icon: Mail, href: "mailto:preeti.thakur7742@gmail.com", color: "text-orange-600" },
              ].map(({ Icon, href, color }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={`w-6 h-6 ${color}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Universal Discover More Button */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wide">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;