import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Abdel Sayedahmed",
      "/aboutme": "About Me",
      "/contact": "Contact Me",
      "/projects": "Projects",
    };

    document.title = titles[location.pathname] || "Abdel Sayedahmed";
  }, [location]);

  return (
    <div className="animated-bg">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-full"
              ></motion.div>
            }
          />
          <Route
            path="/aboutme"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-full min-h-screen"
              >
                <AboutMe />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-full min-h-screen"
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-full min-h-screen"
              >
                <Projects />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
