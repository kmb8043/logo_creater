// packages importing //
const fs = require('fs');
const inquirer = require('inquirer');
const { triangle, square, circle } = require('./lib/shapes');

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three characters to include in your logo',
                name:'text',
            },

            {
                type:'input',
                message: 'Pick text color for the text',
                name: 'textColor',
            },

            {
                type: 'list',
                message: 'Pick a shape',
                name: 'shape',
                choices: ['triangle' , 'square' , 'cirlce'],
            },

            {
                type: 'input',
                message: 'Choose a background color for your shape',
                name: 'shapeColor',
            }
        ])

        .then((data) => {
            const { text, textColor, shape, shapeColor} = data;
            var svglogo;
            switch (shape){
                case 'triangle':
                    svglogo = new triangle(text, textColor, shapeColor);
                    break;
                case 'square':
                    svglogo = new square(text, textColor, shapeColor);
                    break;
                case 'circle':
                    svglogo = new circle(text, textColor, shapeColor);
            }
// created file goes into the examples folder //
    fs.writeFileSync('./examples/logo.svg' , svglogo.render());
        });