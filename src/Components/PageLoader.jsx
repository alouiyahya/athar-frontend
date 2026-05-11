import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative">
        {/* Abstract Liquid Shape (The Blob) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "50% 50% 20% 80% / 20% 50% 80% 20%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-64 h-64 bg-[#0082fb]/5 blur-2xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />

        {/* The Main Animated Container */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Logo with a pulse ring */}
            <div className="relative p-4">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-2 border-[#0082fb] rounded-full"
              />
              <img src="/logo-athar.jpg" alt="Logo" className="w-24 h-24 object-contain rounded-full relative z-20" />
            </div>
          </motion.div>

          {/* Staggered Branding Text */}
          <div className="mt-8 overflow-hidden h-10 flex items-center justify-center">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-[#0082fb] text-2xl font-black tracking-[0.4em] uppercase font-serif"
            >
              أثر
            </motion.h2>
          </div>
          
          {/* Minimalist Micro-progress */}
          <div className="mt-4 flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 bg-[#0082fb] rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modern Background Details */}
      <div className="absolute bottom-10 left-10 text-[10px] font-bold text-slate-300 tracking-widest uppercase origin-left -rotate-90">
        Athar Relief & Development
      </div>
      <div className="absolute top-10 right-10 text-[10px] font-bold text-slate-300 tracking-widest uppercase">
        Version 4.0 / 2026
      </div>
    </motion.div>
  );
};

export default PageLoader;