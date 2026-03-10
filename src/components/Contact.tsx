import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('SUCCESS!', result.text);
      setIsSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      form.current!.reset();
    }, (error) => {
      console.log('FAILED...', error.text);
      setLoading(false);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'preeti.thakur7742@gmail.com',
      href: 'mailto:preeti.thakur7742@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8447847742',
      href: 'tel:918447847742',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      href: 'https://maps.app.goo.gl/ZGWqMSLnEDKk5ggcA',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/preetithakur7742-sys',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/preetibhadouriya/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:preeti.thakur7742@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="contact" data-cursor-color="from-green-500 to-emerald-500" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-b border-gray-200 dark:border-gray-800 pb-20"      >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your data into actionable insights? Let’s collaborate and build something meaningful together.
            </p>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Available for Projects</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Currently open for digital marketing projects. Let’s discuss how I can help you achieve your goals!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="flex-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                      placeholder="Tell me about your project, goals, and how I can help..."
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    data-cursor="Send"
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading || isSubmitted}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
