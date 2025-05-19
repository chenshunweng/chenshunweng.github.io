import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) return localTheme;
    // Default to system preference if available, otherwise light
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Listener for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only update if no theme is explicitly set by user via localStorage
      if (!localStorage.getItem('theme_user_preference')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Add listener if supported
    try {
      mediaQuery.addEventListener('change', handleChange);
    } catch (e) { // Safari < 14
      mediaQuery.addListener(handleChange);
    }
    
    // Initial check in case theme was not in localStorage
    if (!localStorage.getItem('theme')) {
        setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    return () => {
      try {
        mediaQuery.removeEventListener('change', handleChange);
      } catch (e) { // Safari < 14
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Function to allow user to explicitly set theme, overriding system preference listener
  const setUserThemePreference = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme_user_preference', 'true'); // Mark that user has made a choice
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: setUserThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
};
