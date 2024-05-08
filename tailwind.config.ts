import { fontFamily } from 'tailwindcss/defaultTheme';

export const corePlugins = {
    preflight: false,
    container: false,
};
export const darkMode = ['class', '[data-theme="dark"]'];
export const content = ['./src/**/*.{jsx,tsx,html}'];
export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
            mono: ['"Fira Code"', ...fontFamily.mono],
        },
        borderRadius: {
            sm: '4px',
        },
        screens: {
            sm: '0px',
            lg: '997px',
        },
        colors: {},
    },
};
export const plugins = [];
