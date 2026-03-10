import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Target,
  Megaphone,
  PieChart,
  Layers,
} from "lucide-react";

const Skills = () => {
  const marketingCategories = [
    {
      title: "Performance Marketing",
      icon: TrendingUp,
      gradient: "from-blue-600 to-blue-700",
      items: [
        "Google Ads (Search, Display, YouTube)",
        "Meta Ads (Facebook & Instagram)",
        "Campaign Structuring & Scaling",
        "ROAS & CAC Optimization",
        "Conversion Tracking & Pixels",
      ],
    },
    {
      title: "SEO & Growth",
      icon: Target,
      gradient: "from-teal-600 to-teal-700",
      items: [
        "Keyword Research & Content Planning",
        "On-page & Technical SEO",
        "Search Console Insights",
        "Organic Traffic Growth",
        "Content Optimization",
      ],
    },
    {
      title: "Analytics & Attribution",
      icon: BarChart3,
      gradient: "from-purple-600 to-purple-700",
      items: [
        "Google Analytics 4 (GA4)",
        "Funnel & Cohort Analysis",
        "Event Tracking & UTM Strategy",
        "A/B Testing & CRO",
        "Data-driven Decision Making",
      ],
    },
    {
      title: "Brand & Social Media",
      icon: Megaphone,
      gradient: "from-orange-600 to-orange-700",
      items: [
        "Brand Positioning & Messaging",
        "Social Media Growth Strategy",
        "Influencer & Community Campaigns",
        "Content Calendars",
        "Engagement & Retention",
      ],
    },
    {
      title: "Marketing Strategy",
      icon: Layers,
      gradient: "from-green-600 to-green-700",
      items: [
        "Full-funnel Strategy",
        "Customer Journey Mapping",
        "Audience Segmentation",
        "Go-to-Market Planning",
        "Campaign Performance Reviews",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: PieChart,
      gradient: "from-pink-600 to-pink-700",
      items: [
        "Meta Ads Manager",
        "Google Ads",
        "Google Analytics 4",
        "Search Console",
        "Canva & Marketing Dashboards",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <section id="skills" className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>

            {/* Divider line */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6" />

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive skill set focused on growth, performance, and measurable impact
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {marketingCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
                whileHover={{ y: -6 }}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300 blur-2xl`} />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl shadow-soft`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3 relative">
                  {category.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 md:mt-20 pb-16 border-b border-gray-200 dark:border-gray-800"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Ready to leverage these skills for your brand?
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;