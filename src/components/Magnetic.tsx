import { motion } from "framer-motion";
import { ReactNode } from "react";

const Magnetic = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            whileHover={{ x: 4, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
