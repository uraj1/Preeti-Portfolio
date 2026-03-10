import { motion } from 'framer-motion';
import { BarChart3, Database, TrendingUp, Rocket, Quote } from 'lucide-react';
import { FaGoogle, FaMeta } from "react-icons/fa6";
import { SiGoogleanalytics, SiGoogleads, SiSemrush } from "react-icons/si";
import { BsBuildingsFill } from "react-icons/bs";

import ProfileImage from './ProfileImage';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="pt-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- BLOCK 1: HEADER & MAIN GRID --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">My Work</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

            {/* ROW 1 — BIO + PROFILE */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Driving Growth Through <br />
                <span className="text-blue-600 dark:text-blue-400">Digital Intelligence</span>
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I’m a <span className="font-semibold text-gray-900 dark:text-white">Digital Marketing Strategist</span> focused on helping brands scale through performance-driven campaigns and data-backed decision making.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My work spans across paid marketing, SEO, and social media growth — ensuring every campaign is measurable and aligned with business goals.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond the metrics, I believe in building sustainable digital footprints that adapt to algorithm shifts, ensuring long-term brand authority rather than just short-term wins.
              </p>

              <div className="bg-blue-50 dark:bg-gray-800/50 p-6 rounded-2xl border-l-4 border-blue-600">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "Marketing isn't just about selling; it's about telling a story that resonates and retaining the audience that matters."
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProfileImage />
            </motion.div>

            {/* ROW 2 — TESTIMONIALS + EXPERTISE */}

            {/* WHAT CLIENTS SAY */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Quote className="w-5 h-5 text-blue-600" /> Testimonials
              </h4>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                    “Preeti helped us scale our paid campaigns with a clear strategy and measurable ROI. Her approach is both creative and analytical.”
                  </p>
                  <p className="mt-3 text-xs font-bold text-gray-900 dark:text-white">
                    — Marketing Lead, Startup
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                    “From SEO to performance marketing, she understands the full funnel. A strong problem-solver with execution skills.”
                  </p>
                  <p className="mt-3 text-xs font-bold text-gray-900 dark:text-white">
                    — Growth Manager, Agency
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MARKETING EXPERTISE */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-2xl p-6 relative overflow-hidden shadow-lg border border-white/20">

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <BarChart3 className="w-10 h-10 text-blue-600" />
                    <Database className="w-10 h-10 text-teal-600" />
                    <TrendingUp className="w-10 h-10 text-orange-600" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Marketing Expertise
                  </h4>

                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-medium">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Performance Marketing & Paid Campaigns</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>SEO, Growth & Funnel Optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span>Audience Insights & Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>Brand Strategy & Digital Strategists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- BLOCK 4: LOGOS & TOOLS --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Trusted By */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8 font-semibold">
              Trusted by brands & teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <FaMeta className="w-8 h-8 text-blue-600" />
                <span className="font-bold text-xl dark:text-white hidden sm:block">Meta</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGoogle className="w-7 h-7 text-gray-800 dark:text-white" />
                <span className="font-bold text-xl dark:text-white hidden sm:block">Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-8 h-8 text-orange-500" />
                <span className="font-bold text-xl dark:text-white hidden sm:block">HighGrowth</span>
              </div>
              <div className="flex items-center gap-2">
                <BsBuildingsFill className="w-8 h-8 text-teal-600" />
                <span className="font-bold text-xl dark:text-white hidden sm:block">Agency</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack & Tools */}
          <motion.div variants={fadeInUp} className="pt-4 pb-6 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { Icon: FaMeta, label: "Meta Ads", color: "text-blue-600" },
                { Icon: SiGoogleads, label: "Google Ads", color: "text-blue-500" },
                { Icon: SiGoogleanalytics, label: "GA4", color: "text-orange-500" },
                { Icon: SiSemrush, label: "Semrush", color: "text-orange-600" },
                { Icon: FaGoogle, label: "Search Console", color: "text-green-600" }
              ].map((tool, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInUp}
                >
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-md transition-all">
                    <tool.Icon className={`w-8 h-8 ${tool.color}`} />
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tool.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;