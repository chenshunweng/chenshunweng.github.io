/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF", // White background
          text: "#1f2937",       // Tailwind gray-800 (Dark gray text)
          primary: "#3b82f6",    // Tailwind blue-500 (Blue primary)
          accent: "#2563eb",     // Tailwind blue-600 (Slightly darker blue for hover/accent)
          card: "#f9fafb",       // Tailwind gray-50 (Off-white for cards)
          border: "#e5e7eb",     // Tailwind gray-200 (Light gray border)
          muted: "#6b7280",      // Tailwind gray-500 (Muted text, like placeholders)
        },
        dark: {
          background: "#0f172a", // Tailwind slate-900 (Very dark blue/black)
          text: "#f1f5f9",       // Tailwind slate-100 (Lighter text for better readability)
          primary: "#93c5fd",    // Tailwind blue-300 (Lighter blue for primary elements)
          accent: "#38bdf8",     // Tailwind sky-400 (Brighter accent color)
          card: "#1e293b",       // Tailwind slate-800 (Dark gray/blue for cards)
          border: "#334155",     // Tailwind slate-700 (Medium gray/blue border)
          muted: "#cbd5e1"       // Tailwind slate-300 (Lighter muted text)
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': { // Added for header elements
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-subtle': { // For scroll down indicator
          '0%, 100%': { transform: 'translateY(-15%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 1.5s infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

