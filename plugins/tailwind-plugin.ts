import { PostCssOptions } from '@docusaurus/types';

export function tailwindPlugin() {
    return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions: PostCssOptions) {
            postcssOptions.plugins = [require('postcss-import'), require('tailwindcss'), require('autoprefixer')];
            return postcssOptions;
        },
    };
}
