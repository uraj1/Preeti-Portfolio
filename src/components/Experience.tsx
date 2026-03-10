import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Users } from 'lucide-react';

const Experience = () => {
  const [selectedCertification, setSelectedCertification] = useState<any>(null);

  const experiences = [
    {
      title: "Digital Marketing Specialist",
      company: "One Login Digital Media",
      location: "Gurugram, India",
      period: "Mar 2025 - Present",
      type: "Full-time",
      metrics: ["CPL ↓25%", "Leads ↑35%", "Engagement 3x"],
      description:
        "Managing paid advertising and organic growth strategies across Meta Ads, Google Ads, and SEO for multiple client accounts.",
      achievements: [
        "Managed PPC campaigns for 10+ accounts with optimized audience targeting",
        "Ranked 30+ keywords on Google Page 1 increasing organic traffic by 35%",
        "Built GA4 and Tag Manager dashboards for ROI and conversion tracking",
        "Designed integrated SEM + SEO + email strategies for lead funnels"
      ],
      technologies: [
        "Meta Ads",
        "Google Ads",
        "SEO",
        "SEM",
        "GA4",
        "Google Tag Manager",
        "Lead Generation"
      ],
      icon: TrendingUp,
    },

    {
      title: "Ads Specialist – Performance Marketer",
      company: "Walmond Realty Dart",
      location: "Noida, India",
      period: "Mar 2024 - Mar 2025",
      type: "Full-time",
      metrics: ["500+ Leads / month", "CPL ↓30%", "CTR 4.2%"],
      description:
        "Executed high-performing paid campaigns for real estate projects using Meta Ads and Google Ads.",
      achievements: [
        "Scaled PPC campaigns across 15+ real estate projects",
        "Reduced CPL by 30% using A/B testing and landing page optimization",
        "Built remarketing campaigns achieving lower CPL than industry benchmarks",
        "Integrated email marketing and SEO to boost funnel conversions"
      ],
      technologies: [
        "Meta Ads",
        "Google Ads",
        "Remarketing",
        "Email Marketing",
        "Landing Page Optimization"
      ],
      icon: Award,
    },

    {
      title: "Digital Marketing Executive",
      company: "Medical Dialogues",
      location: "Delhi NCR",
      period: "Aug 2022 - Mar 2024",
      type: "Full-time",
      metrics: ["Traffic ↑50%", "20+ Keywords Rank", "8k Followers"],
      description:
        "Handled SEO optimization, content marketing, and social media campaigns for healthcare audiences.",
      achievements: [
        "Boosted organic traffic by 50% through SEO improvements",
        "Achieved Page 1 ranking for 20+ keywords within 6 months",
        "Grew social media audience by 8000+ followers",
        "Produced video marketing content improving session duration by 25%"
      ],
      technologies: [
        "SEO",
        "Content Marketing",
        "Social Media Marketing",
        "Video Marketing",
        "Google Analytics"
      ],
      icon: Users,
    }
  ];

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/40 to-teal-50/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border-b border-gray-200 dark:border-gray-800 pb-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Driving measurable growth through paid advertising, SEO, and performance marketing strategies.            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-teal-600 opacity-70 hidden lg:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } mb-12`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full border-4 border-blue-600 flex items-center justify-center z-10 hidden lg:flex shadow-lg">
                  <exp.icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-teal-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-gray-700/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Certification Details
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  (Certification content here)
                </p>
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;