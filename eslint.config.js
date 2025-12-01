import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.js'], plugins: { js }, extends: ['js/recommended'] },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
]);
