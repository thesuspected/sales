// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    modules: ['@nuxtjs/tailwindcss', ['@nuxtjs/google-fonts', {
        families: {
            Unbounded: '200..800',
            'Inter Tight': '200..800',
        },
    }]],
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})