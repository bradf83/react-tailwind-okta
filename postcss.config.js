const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')
({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    css: ['./src/styles/tailwind.css'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});


module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        // purgecss TODO: Put this back as needed
    ],
};