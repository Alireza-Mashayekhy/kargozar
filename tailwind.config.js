/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primary: {
                1: '#401F71',
                2: '#DED0F2',
            },
            secondary: '#F2F2F2',
            white: '#ffffff',
            black: '#000000',
            header: '#401F7130',
        },
        extend: {
            boxShadow: {
                md: '4px 4px 30px 0px #00000050;',
            },
        },
    },
    plugins: [],
    cssnano: {},
};
