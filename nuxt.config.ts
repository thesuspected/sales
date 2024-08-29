// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Sales Twice — Прокачка отдела продаж',
            meta: [
                {
                    name: 'description',
                    content:
                        'Наша задача — прокачать отдел продаж, внедрив необходимые инструменты и передать собственнику бизнеса в виде готовых инструкций и рекомендаций.',
                },
            ],
            script: [
                {
                    src: '//code.jivo.ru/widget/B7oBuLYXun',
                    async: true,
                },
            ],
        },
    },

    devtools: {
        enabled: true,
    },

    modules: [
        '@nuxtjs/tailwindcss',
        [
            'nuxt-yandex-metrika',
            {
                id: '98081717',
                debug: true,
                // debug: process.env.NODE_ENV !== 'production',
                // delay: 0,
                // cdn: false,
                // verification: null, // Verification in Yandex Webmaster
                options: {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                },
            },
        ],
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Unbounded: '200..800',
                    'Inter Tight': '200..800',
                },
            },
        ],
        [
            'nuxt-quasar-ui',
            {
                config: {
                    brand: {
                        primary: '#407BFF',
                        'primary-secondary': '#B3CAFF',
                        secondary: '#ACB4C4',
                        accent: '#E28B85',
                        'accent-secondary': '#F7CECB',
                        dark: '#555A65',
                        'pre-dark': '#777D8B',
                        light: '#F7F8FA',
                        grey: '#D7DAE2',
                        white: '#FFFFFF',
                        black: '#2B2D33',
                        negative: '#F44336',
                    },
                },
                plugins: ['Notify'],
                sassVariables: true,
            },
        ],
    ],

    css: ['~/assets/scss/main.scss'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    compatibilityDate: '2024-08-22',
})
