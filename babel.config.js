module.exports = {
    plugins: [
        'macros',
        [
            'import',
            { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }
        ]
    ],
    presets: ['@babel/preset-env', '@babel/preset-react']
};
