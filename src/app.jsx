import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './Pages/Welcome';
import PageLoader from './Components/PageLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3.5 seconds bach l'user i-3ich l'experience
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <Welcome />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;