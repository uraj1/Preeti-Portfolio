import { motion } from "framer-motion";

const ProfileImage = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative flex justify-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full max-w-[400px] aspect-[4/5] group">
        {/* Animated Gradient Border/Glow */}
        <motion.div
          className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-blue-600/20 via-purple-500/20 to-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-700"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Main Image Container */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-800">
          <img 
            src="/profile.jpg" 
            alt="Preeti Bhadouriya" 
            className="w-full h-full object-cover transform transition-transform duration-700" 
          />

          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
          
          {/* Bottom Label Decoration */}
          <motion.div 
            className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white text-xs font-medium uppercase tracking-widest text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Preeti Bhadouriya
          </motion.div>
        </div>

        {/* Decorative Geometric Element */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </div>
    </motion.div>
  );
};

export default ProfileImage;