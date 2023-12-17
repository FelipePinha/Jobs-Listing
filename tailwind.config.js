/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            bgGrayishCyan: '#effafa',
            lightCyan: '#eef6f6',
            darkCyan: '#7b8e8e',
            veryDarkCyan: '#2c3a3a',
            desaturatedDarkCyan: '#5ba4a4',
            white: '#fff',
        },
        fontFamily: {
            sans: ['League Spartan', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
