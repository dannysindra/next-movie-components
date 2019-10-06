module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    parser: 'babel-eslint',
    rules: {
        'jsx-a11y/href-no-hash': ['off'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
        'react/jsx-props-no-spreading': ['off']
    }
};
