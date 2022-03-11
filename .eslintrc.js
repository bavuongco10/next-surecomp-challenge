module.exports = {
    env: {
        es6: true,
        browser: true,
        jest: true,
    },
    extends: [
        'next',
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'plugin:promise/recommended',
        'plugin:react/recommended',
    ],
    plugins: [
        'react',
        'prettier',
        'promise',
    ],
    rules: {
        // /// ///////
        'global-require': 0,
        'radix': 0,
        'no-restricted-exports': 0,
        'no-nested-ternary': 0,
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'no-plusplus': 0,
        'new-cap': [
            2,
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        'valid-jsdoc': 0,
        'arrow-body-style': [2, 'as-needed'],
        'no-useless-constructor': 2,
        eqeqeq: ['error', 'smart'],
        'no-underscore-dangle': [
            0,
            {
                allowAfterThis: true,
                enforceInMethodNames: true,
                allow: ['_id', '_env_', '__persistor'],
            },
        ],
        // /// ///////
        //
        // /// ///////
        'prettier/prettier': 'error',
        // /// ///////
        //
        // /// ///////
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/iframe-has-title': 0,
        // /// ///////
        //
        // /// ///////
        // 'lodash/prefer-lodash-method': [2, { ignoreMethods: ['replace'] }],
        // 'lodash/import-scope': [2, 'member'],
        // /// ///////
        //
        // /// ///////
        'import/order': [2, { 'newlines-between': 'always' }],
        'import/prefer-default-export': 0,
        // /// ///////
        //
        // /// ///////
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: 'useRecoilCallback',
            },
        ],
        // /// ///////
        //
        // /// ///////

        'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        'react/no-string-refs': 2,
        'react/forbid-prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-no-target-blank': 0,
    },
};
