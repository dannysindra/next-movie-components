module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/.storybook/'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
    }
};
