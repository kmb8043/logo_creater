// packages importing //
const fs = require('fs/promises');
const inquirer = require('inquirer');
const { triangle, square, circle } = require('./lib/shapes');


const questions = [  // this is our dataset (questionset)
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
        choices: ['triangle' , 'square' , 'circle'],
    },

    {
        type: 'input',
        message: 'Choose a background color for your shape',
        name: 'shapeColor',
    }
]

/*
inquirer
    .then(function(answers) {  // Here we HANDLE the PROMISE
        console.log("Data: ", answers);
        // what do we do next?
    })
    .catch(error => {
        console.log("An error occured: ", error);
        // we could also exit out of our program
    });
*/
        function createLogo(answers){
            if(answers.shape ==='triangle'){
                //let logo = new triangle(answers.text, answers.textColor, answers.shapeColor)
                let logo = new triangle(answers.shapeColor, answers.text, answers.textColor)
                return logo.render()
            } else if (answers.shape === 'square'){
                //let logo = new square (answers.text, answers.textColor, answers.shapeColor)
                let logo = new square (answers.shapeColor, answers.text, answers.textColor)
                return logo.render()
            } else {
               // let logo = new circle (answers.text, answers.textColor, answers.shapeColor)
                let logo = new circle (answers.shapeColor, answers.text, answers.textColor)
                return logo.render()
            }
            
        }
        


        function saveLogo(answers){
            let customizedLogo = createLogo(answers);
            fs.writeFile('./examples/logo.svg', customizedLogo);
        }
        
        function init (){
            inquirer
                .prompt(questions)
                .then((answers) => {
                    console.log("Data: ", answers)
                    saveLogo(answers);
                })
                .catch(error => {
                    console.log(error);
                })


                // what might or could happen while this operation is running(?)
        }

        init();

        