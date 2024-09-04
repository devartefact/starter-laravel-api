import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 8,
        },
        rules: {
            'no-unused-vars': [
                1,
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
    pluginJs.configs.recommended,
];
