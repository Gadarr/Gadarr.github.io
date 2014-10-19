module.exports = {
    src: {
        root: './src/UI/',
        templates: './src/UI/**/*.hbs',
        index: './src/UI/index.html',
        partials: './src/UI/**/*Partial.hbs',
        scripts: './src/UI/**/*.js',
        less: ['./src/UI/**/*.less'],
        content: './src/UI/Content/',
        images: './img/**/*',
        exclude :{
            libs:'!./src/UI/JsLibraries/**'
        }
    },
    dest: {
        root: './_output/UI/',
        content: './_output/UI/Content/'
    }
};