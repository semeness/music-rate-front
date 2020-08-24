module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"]
            }
        }
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: ['airbnb-typescript', 'prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
};