import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { tailwindPlugin } from './plugins/tailwind-plugin';

const config: Config = {
    title: 'Swaroop Raghupathy',
    tagline: 'Personal Website',
    favicon: 'img/favicon.ico',
    plugins: [
        tailwindPlugin,
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 85,
                max: 2000,
                min: 500,
                steps: 4,
                disableInDev: false,
            },
        ],
    ],
    url: 'https://inprogress-engineer.com',
    baseUrl: '/',
    organizationName: 'swaroopar',
    projectName: 'website',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    presets: [
        [
            'classic',
            {
                blog: false,
                docs: {
                    sidebarPath: require.resolve('./sidebars.ts'),
                    sidebarCollapsible: true,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        navbar: {
            title: 'Swaroop Raghupathy',
            logo: {
                alt: 'SR',
                src: 'img/icon-light.png',
                srcDark: 'img/icon-dark.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'introduction',
                    position: 'left',
                    label: 'TIL',
                },
                {
                    to: '/talks',
                    position: 'left',
                    label: 'Talks',
                },
                {
                    to: '/why',
                    position: 'left',
                    label: 'Why?',
                },
                {
                    href: 'https://www.linkedin.com/in/arswa',
                    className: 'header-linkedin-link',
                    position: 'right',
                },
                {
                    href: 'https://github.com/swaroopar',
                    className: 'header-github-link',
                    position: 'right',
                },
            ],
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/swaroopar',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/arswa',
                        },
                    ],
                },
            ],
            copyright: `Copyright ©️ 2024 Swaroop Raghupathy. Built with ❤️ using Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
