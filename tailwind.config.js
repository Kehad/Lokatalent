/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-service2.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};

// sm	--- 640px	@media (min-width: 640px) { ... }
// md --- 768px	@media (min-width: 768px) { ... }
// lg	--- 1024px	@media (min-width: 1024px) { ... }
// xl	--- 1280px	@media (min-width: 1280px) { ... }
// 2xl --- 1536px	@media (min-width: 1536px) { ... }

// sm: it works in between 640px to 768px
// md: it works in between 768px to 1024px
// lg: it works in between 1024px to 1280px
// xl: it works in between 1280x to 1536px
// 2xl: it works in between 15px and above