#!/usr/bin/env node

/**
 * Generate the Knowledge Map page from the docs/ folder.
 *
 * Scans docs/ only and builds a three-level hierarchy:
 *   domain -> category (folder) -> note (file).
 * The output is a Mermaid `mindmap` written to src/pages/knowledge-map.mdx.
 *
 * The category -> domain mapping below is the single source of truth. Any
 * category not listed falls under the default "Other" parent.
 *
 * Usage:
 *   node scripts/generate-knowledge-map.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.resolve(__dirname, '../docs');
const OUTPUT_FILE = path.resolve(__dirname, '../src/pages/knowledge-map.mdx');

/**
 * Maps each docs/ category folder to a higher-level parent domain.
 * Categories missing here are grouped under DEFAULT_DOMAIN.
 */
const CATEGORY_TO_DOMAIN = {
    browsers: 'Frontend & Web',
    bundlers: 'Frontend & Web',
    css: 'Frontend & Web',
    html: 'Frontend & Web',
    javascript: 'Frontend & Web',
    react: 'Frontend & Web',
    typescript: 'Frontend & Web',

    go: 'Programming Languages',
    java: 'Programming Languages',

    ai: 'AI & Math',
    algorithms: 'AI & Math',
    mathematics: 'AI & Math',

    'data-model': 'Data',
    'data-structures': 'Data',
    databases: 'Data',

    computers: 'Systems & OS',
    linux: 'Systems & OS',
    storage: 'Systems & OS',
    physics: 'Systems & OS',

    containers: 'Infrastructure',
    kubernetes: 'Infrastructure',
    git: 'Infrastructure',

    'event-driven': 'Distributed Systems',
    'system-design': 'Distributed Systems',
    network: 'Distributed Systems',
    blockchain: 'Distributed Systems',

    security: 'Security',
};

const DEFAULT_DOMAIN = 'Other';

/** Whole-name labels that should keep a specific casing (acronyms, etc.). */
const LABEL_OVERRIDES = {
    ai: 'AI',
    css: 'CSS',
    html: 'HTML',
};

/** Turn a kebab-case file/folder name into a readable label. */
function toLabel(name) {
    if (LABEL_OVERRIDES[name]) {
        return LABEL_OVERRIDES[name];
    }
    return name
        .split('-')
        .map((word) => (word.length === 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join(' ');
}

/** Recursively collect note labels (file basenames) inside a category folder. */
function collectNotes(dir) {
    const notes = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            notes.push(...collectNotes(fullPath));
        } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
            notes.push(toLabel(entry.name.replace(/\.mdx?$/, '')));
        }
    }
    return notes;
}

/** Build the domain -> category -> notes tree from docs/. */
function buildTree() {
    const categories = fs
        .readdirSync(DOCS_DIR, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort();

    const tree = {};
    let noteCount = 0;

    for (const category of categories) {
        const domain = CATEGORY_TO_DOMAIN[category] || DEFAULT_DOMAIN;
        const notes = collectNotes(path.join(DOCS_DIR, category)).sort();
        if (notes.length === 0) {
            continue;
        }
        noteCount += notes.length;
        tree[domain] = tree[domain] || {};
        tree[domain][toLabel(category)] = notes;
    }

    return { tree, noteCount, categoryCount: categories.length };
}

/** Render the tree as Mermaid mindmap lines (two spaces per level). */
function renderMindmap(tree) {
    const lines = ['mindmap', '  root((Knowledge))'];
    for (const domain of Object.keys(tree).sort()) {
        lines.push(`    ${domain}`);
        for (const category of Object.keys(tree[domain]).sort()) {
            lines.push(`      ${category}`);
            for (const note of tree[domain][category]) {
                lines.push(`        ${note}`);
            }
        }
    }
    return lines.join('\n');
}

function main() {
    const { tree, noteCount, categoryCount } = buildTree();
    const mindmap = renderMindmap(tree);

    const page = `{/* GENERATED FILE - do not edit by hand. Run \`task generate-map\` to refresh. */}

# Knowledge Map

This map shows every topic I've written about. Each note sits under a parent area, so the breadth and the depth are clear at a glance.

It covers ${noteCount} notes across ${categoryCount} topics.

\`\`\`mermaid
${mindmap}
\`\`\`
`;

    fs.writeFileSync(OUTPUT_FILE, page, 'utf-8');
    console.log(`Wrote ${path.relative(process.cwd(), OUTPUT_FILE)}`);
    console.log(`  ${noteCount} notes across ${categoryCount} topics`);
}

main();
