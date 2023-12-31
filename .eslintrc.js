module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    '.next',
    'amplify',
    'build',
    'next-env.d.ts',
    'node_modules',
    'out'
  ],
  rules: {
    // ↓ 自動生成された型定義ファイルでエラーが出るので無効化。
    '@typescript-eslint/ban-tslint-comment': 'off'
  }
}
