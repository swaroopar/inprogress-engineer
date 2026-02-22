#!/usr/bin/env node

/**
 * Validation script to check that all Excalidraw images use ThemeImage component
 *
 * This script ensures that all .mdx files containing Excalidraw images
 * use the ThemeImage component instead of markdown image syntax.
 *
 * Usage:
 *   node scripts/check-theme-image-usage.mjs
 *
 * Exit codes:
 *   0 - All Excalidraw images use ThemeImage component
 *   1 - Some files use markdown image syntax for Excalidraw images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.resolve(__dirname, '../docs');

/**
 * Find all MDX files
 */
function findMdxFiles(dir) {
    const files = [];

    function scanDir(currentDir) {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
                scanDir(fullPath);
            } else if (entry.name.endsWith('.mdx')) {
                files.push(fullPath);
            }
        }
    }

    scanDir(dir);
    return files;
}

/**
 * Check if content uses markdown image syntax for Excalidraw images
 */
function findExcalidrawMarkdownImages(content) {
    // Match markdown image syntax for Excalidraw images: ![alt](...excalidraw.png)
    const regex = /!\[([^\]]*)\]\([^)]*\.excalidraw\.png\)/g;
    const matches = [];

    let match;
    while ((match = regex.exec(content)) !== null) {
        matches.push({
            full: match[0],
            index: match.index,
        });
    }

    return matches;
}

/**
 * Get line number from index in content
 */
function getLineNumber(content, index) {
    const lines = content.substring(0, index).split('\n');
    return lines.length;
}

/**
 * Main function
 */
function main() {
    console.log('Checking Excalidraw image usage in MDX files...\n');

    const files = findMdxFiles(DOCS_DIR);
    console.log(`Found ${files.length} MDX files to check\n`);

    const errors = [];

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const matches = findExcalidrawMarkdownImages(content);

        if (matches.length > 0) {
            const relativePath = path.relative(DOCS_DIR, file);
            for (const match of matches) {
                const lineNum = getLineNumber(content, match.index);
                errors.push({
                    file: relativePath,
                    line: lineNum,
                    match: match.full,
                });
            }
        }
    }

    if (errors.length > 0) {
        console.error('❌ Error: Found Excalidraw images using markdown syntax instead of ThemeImage component\n');
        console.error('The following files need to be updated:\n');

        for (const error of errors) {
            console.error(`  ${error.file}:${error.line}`);
            console.error(`    ${error.match}`);
            console.error('');
        }

        console.error('---');
        console.error('Please use the ThemeImage component instead:');
        console.error('');
        console.error("  import { ThemeImage } from '@site/src/components/ThemeImage';");
        console.error('');
        console.error('  <ThemeImage src="/img/xxx.excalidraw.png" alt="Description" />');
        console.error('');

        process.exit(1);
    }

    console.log('✅ All Excalidraw images use ThemeImage component\n');
    process.exit(0);
}

main();
