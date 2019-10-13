const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tail.js'),
        require('autoprefixer'),
    ],
};