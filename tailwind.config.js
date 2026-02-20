/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#003366',    // Bleu marine du logo
                    blue: '#0099CC',    // Bleu ciel du logo
                    red: '#E14D2A',     // Rouge/Orange du logo
                    yellow: '#FD841F',  // Jaune/Or du logo (approximatif)
                    dark: '#0A2647',    // Fond sombre Premium
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
