import { PostCssOptions } from '@docusaurus/types';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export function tailwindPlugin() {
    return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions: PostCssOptions) {
            postcssOptions.plugins = [postcssImport(), tailwindcss(), autoprefixer()];
            return postcssOptions;
        },
    };
}
