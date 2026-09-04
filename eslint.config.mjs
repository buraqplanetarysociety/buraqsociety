import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

// ESLint 9 only reads flat config; the old .eslintrc.json was silently dead,
// which is why the editor reported a config error on every file.
const config = [
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'originals/**'],
  },
  ...nextCoreWebVitals,
]

export default config
