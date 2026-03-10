import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [gradient, setGradient] = useState("from-blue-500 to-teal-500");

  useEffect(() => {
    if (isTouchDevice()) return;

    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      setIsHover(true);
      setLabel(el.dataset.cursor || "Click");
    };

    const leave = () => {
      setIsHover(false);
      setLabel(null);
    };

    document.addEventListener("mousemove", move);

    const hoverables = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    hoverables.forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  // Cursor color per section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-cursor-color");
            if (color) setGradient(color);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  if (isTouchDevice()) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 24,
          y: pos.y - 24,
          scale: isHover ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 5000, damping: 100 }}
      >
        <div
          className={`w-12 h-12 rounded-full border border-transparent bg-gradient-to-r ${gradient} opacity-60`}
          style={{
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          }}
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHover ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 2000, damping: 50 }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
      </motion.div>

      {/* Cursor Text */}
      {label && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none text-xs text-white"
          animate={{ x: pos.x + 18, y: pos.y + 18, opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div className="px-2 py-1 rounded bg-gray-900/80 backdrop-blur-md">
            {label}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
