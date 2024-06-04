import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
// import eslintConfigQwik from 'eslint-plugin-qwik'

export default [
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    name: 'flowbite-qwik',
    ignores: ['lib', 'lib-types', 'coverage', 'node_modules', 'vite.config.ts'],
  },
]
