import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import markdownlintPlugin from 'eslint-plugin-markdownlint';
import markdownlintParser from 'eslint-plugin-markdownlint/parser.js';
import { config } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ['build/**/*', 'plugins/tailwind-config.ts', '.docusaurus/**/*', 'eslint.config.mjs'],
    },
    ...compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
    ),
    {
        plugins: {
            react,
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'script',

            parserOptions: {
                project: 'tsconfig.json',
            },
        },

        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'no-undef': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            'no-console': 'error',
        },
    },
    {
        files: ['**/*md', '**/*mdx'],
        plugins: {
            markdownlint: markdownlintPlugin,
        },

        languageOptions: {
            parser: markdownlintParser,
        },
        rules: {
            ...Object.fromEntries(
                Object.keys(typescriptEslint.rules).map((rule) => [`@typescript-eslint/${rule}`, 'off']),
            ),
            ...markdownlintPlugin.configs.recommended.rules,
            'markdownlint/md013': ['error', { line_length: 120 }],
        },
    },
];
