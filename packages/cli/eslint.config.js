import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    name: 'flowbite-qwik-cli',
    ignores: ['lib', 'lib-types', 'coverage', 'node_modules', 'vite.config.ts'],
  },
]
