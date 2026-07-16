"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
