import React, { Suspense, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import './i18n'; // Initialize i18next

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Fallback component for Suspense
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-light-background dark:bg-dark-background">
    <p className="text-xl text-light-text dark:text-dark-text">Loading...</p>
  </div>
);

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    // The main div now correctly applies dark mode class from ThemeContext
    <div className={`${theme} font-sans antialiased`}> 
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

