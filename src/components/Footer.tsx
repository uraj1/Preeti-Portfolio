import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp, Linkedin, Mail, Instagram, Heart, X } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Campaigns", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Performance Marketing",
    "SEO & Growth Strategy",
    "Meta & Google Ads Management",
    "Marketing Analytics (GA4)",
    "Funnel Optimization",
    "Brand Strategy & Positioning",
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/preetibhadouriya/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/digital_marketing_preeti",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Mail,
      href: "mailto:preeti.thakur7742@gmail.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </motion.div>
              <span className="text-xl font-bold">Preeti Bhadouriya</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
             Digital Marketing Strategist helping brands scale profitably through data-driven paid media, growth marketing, and performance optimization.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Let’s Work Together</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:preeti.thakur7742@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                preeti.thakur7742@gmail.com
              </motion.a>

              <p className="text-gray-400">Gurugram, India</p>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for Marketing Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Preeti Bhadouriya. Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and strategic thinking.</span>
            </div>

            <div className="flex items-center space-x-6 text-gray-400">
              <button
                onClick={() => setModalType("privacy")}
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModalType("terms")}
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        ↑
      </motion.button>
      
      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-gray-700 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative shadow-2xl"
            >
              {modalType === "privacy" ? (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-blue-400">Privacy Policy</h2>
                  <p className="text-gray-300">Your privacy is important. As a digital marketer, I handle data with the highest integrity.</p>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li><strong className="text-gray-200">Data Collection:</strong> This portfolio does not sell your personal data. Information sent via the contact form is used solely for communication.</li>
                    <li><strong className="text-gray-200">Analytics:</strong> I use standard tracking (like GA4) to understand how visitors interact with my work to improve the experience.</li>
                    <li><strong className="text-gray-200">Third Parties:</strong> Your information is never shared with third-party marketers without your explicit consent.</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-teal-400">Terms of Service</h2>
                  <p className="text-gray-300">Guidelines for collaboration and use of this digital portfolio.</p>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li><strong className="text-gray-200">Intellectual Property:</strong> All campaign case studies and creative assets displayed are the property of Preeti Bhadouriya or the respective clients.</li>
                    <li><strong className="text-gray-200">Professional Advice:</strong> The insights shared here are for portfolio purposes and do not constitute a guaranteed ROI for your specific business without a formal audit.</li>
                    <li><strong className="text-gray-200">Collaboration:</strong> Project timelines and deliverables are subject to the terms agreed upon in individual signed contracts.</li>
                  </ul>
                </div>
              )}
              
              <button 
                onClick={() => setModalType(null)}
                className="mt-8 w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;