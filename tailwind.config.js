/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        colors: {
            'primary': '#407BFF',
            'primary-secondary': '#B3CAFF',
            'secondary': '#ACB4C4',
            'accent': '#E28B85',
            'accent-secondary': '#F7CECB',
            'dark': '#555A65',
            'pre-dark': '#777D8B',
            'light': '#F7F8FA',
            'grey': '#D7DAE2',
            'white': '#FFFFFF',
            'black': '#2B2D33',
        },
        extend: {
            borderRadius: {
                'default': '0.625rem', // 10px
                'image': '0.375rem', // 6px
            },
            gap: {
                'default': '0.625rem', // 10px
                'container': '1.25rem', // 20px
            },
            padding: {
                'default': '1.25rem', // 20px
                'container': '2.5rem', // 40px
                'section': '5rem', // 80px
            },
            margin: {
                'default': '1.25rem', // 20px
                'container': '2.5rem', // 40px
                'section': '5rem', // 80px
            },
        },
    },
    plugins: [],
}

