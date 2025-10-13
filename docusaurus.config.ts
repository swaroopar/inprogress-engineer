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
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: 'throw',
            onBrokenMarkdownImages: 'throw',
        },
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
                    // necessary to set extra config on Vercel deployment https://github.com/vercel/vercel/discussions/5737#discussioncomment-8909996
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/admonitions.css'],
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
                    title: 'Today I Learnt',
                },
                {
                    to: '/talks',
                    position: 'left',
                    label: 'Talks',
                    title: 'Talks at Events',
                },
                {
                    to: '/why',
                    position: 'left',
                    label: 'Why?',
                    title: 'Why inprogress-engineer',
                },
                {
                    href: 'https://www.linkedin.com/in/arswa',
                    className: 'header-linkedin-link',
                    position: 'right',
                    title: 'LinkedIn Profile',
                },
                {
                    href: 'https://github.com/swaroopar',
                    className: 'header-github-link',
                    position: 'right',
                    title: 'GitHub Profile',
                },
                {
                    href: 'https://cv-swaroop.vercel.app/',
                    className: 'header-resume-link',
                    position: 'right',
                    title: 'CV',
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
                    title: 'Profiles',
                    items: [
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/arswa',
                        },
                        {
                            label: 'Resume',
                            href: 'https://cv-swaroop.vercel.app/',
                        },
                    ],
                },
                {
                    title: 'Code',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/swaroopar',
                        },
                        {
                            label: 'Source Code',
                            href: 'https://github.com/swaroopar/inprogress-engineer',
                        },
                    ],
                },
            ],
            copyright: `Swaroop Raghupathy. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            appId: 'I405GGM9PX',
            apiKey: 'cec1a8207455c37fb9442984440ac395',
            indexName: 'inprogress-engineer',
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
