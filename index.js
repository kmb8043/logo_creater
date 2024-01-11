// packages importing //
const fs = require('fs');
const inquirer = require('inquirer');
const { triangle, square, circle } = require('./lib/shapes');

function userPrompts(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three characters to include in your logo',
                name:'text',
            },

            {
                type:'input',
                message: 'Pick text color eiher by color name or by the hexadecimal',
                name: 'textColor',
            },

            {
                type: 'list',
                message: 'Pick a shape',
                name: 'shape',
            },

            {
                type: 'input',
                message: 'Choose a color for the shape background (color name or hexadecimal',
                name: 'shapeColor',
            }
        ])

    // if the 'text' is greater than 3 characters //
        .then((answers) => {
            if(answers.text.length > 3 ){
                console.log("Text must be three characters or less. Try again.");
                userPrompts();
            } else{
                writeToFile('logo.svg', answers);
            }
        })
}

userPrompts();
