const plugin = require('tailwindcss/plugin');

/**
 * Баг с JIT
 *
 * Иногда стили не обновляются при изменении конфига.
 * Помогает запустить пересборку стилей через сохранение `global.css`
 */

module.exports = {
    corePlugins: {
        container: false
    },

    /**
     * Не создавайте варианты!
     * Все варианты доступны сразу, если работает JIT режим.
     *
     * {@link https://tailwindcss.com/docs/just-in-time-mode#all-variants-are-enabled Документация}
     */
    // variants: {},

    plugins: [
        /**
         * Хелперы для создания блоков с предустановленным соотношением сторон
         * {@link https://github.com/tailwindlabs/tailwindcss-aspect-ratio Инструкция}
         */
        require('@tailwindcss/aspect-ratio'),

        /**
         * Многострочное троеточие
         * {@link https://github.com/tailwindlabs/tailwindcss-line-clamp Инструкция}
         */
        require('@tailwindcss/line-clamp'),

        /** транзишны */
        plugin(function({ addUtilities }) {
            const newUtilities = {
                '.transition-fast': {
                    transition: '0.15s cubic-bezier(0.645, 0.045, 0.355, 1)'
                },
                '.transition-main': {
                    transition: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
                },
                '.transition-medium': {
                    transition: '0.5s cubic-bezier(0.645, 0.045, 0.355, 1)'
                },
                '.transition-long': {
                    transition: '0.75s cubic-bezier(0.645, 0.045, 0.355, 1)'
                }
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        })

    ],

    theme: {
        extend: {
            fontSize: {
            },
            colors: {
                purple: {
                    900: '#5D16D5'
                },
                gray: {
                    600: '#B3BDD1',
                    500: '#C7D2E9',
                    100: '#F1F1F1',
                    50: '#F9F9FB'
                },
                black: {
                    DEFAULT: '#000000',
                    900: '#121212'
                }
            },
            spacing: {
            }
        },
        fontFamily: {
        },
        screens: {
            xl: { max: '1200px' },
            lg: { max: '1000px' },
            md: { max: '750px' },
            sm: { max: '600px' },
            'a-sm': { min: '601px' },
            'a-md': { min: '751px' },
            'a-lg': { min: '1001px' },
            'a-xl': { min: '1201px' }
        }
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',

        /**
         * Это свойство неработает с JIT режимом.
         * Указывайте необходимые классы в `tailwind-safelist.txt`.
         *
         * {@link https://tailwindcss.com/docs/just-in-time-mode#known-limitations}
         */
        // safelist: [],

        content: [
            /**
             * Здесь указывать набор CSS классов Tailwind, которые приходят с бэка.
             * Все стили написанные в <style> или через `import` не будут резаться, поэтому не добавляйте туда ничего кроме tailwind классов.
             *
             * {@link https://tailwindcss.com/docs/just-in-time-mode#known-limitations}
             */
            './assets/styles/tailwind-safelist.txt',

            './components/**/*.vue',
            './layouts/**/*.vue',
            './pages/**/*.vue',
            './mixins/**/*.{js,ts}',
            './helpers/**/*.{js,ts}',
            './plugins/**/*.{js,ts}',
            './nuxt.config.{js,ts}'
        ]
    }
};
