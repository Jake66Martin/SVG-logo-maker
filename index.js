const fs = require("fs")
const inquirer = require("inquirer")
const logo = require("./Utils/generateLogo.js")
const hexPattern = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;


function writeToFile(response) {
  
    fs.writeFile(`${response.shape}.svg`, logo.generateLogo(response), (err) =>
    err ? console.error(err) : console.log('Mission success human!')
    );
    
    console.log(response);
    }

function init () {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What characters will your logo display? (up to 3 characters max)',
      name: 'text',
      validate: (input) => {
        if (input.length > 3) {
          return 'Length must be 3 characters or less.';
        }
        return true;
      },
    },
    {
      type: 'input',
      message: 'Enter a hexidecimal in order to choose the text colour',
      name: 'textColours',
      validate: (input) => {
        if (hexPattern.test(input) === true) {
          return true;
        }
        return "Must be a valid hexidecimal code."
      },
    },
    {
      type: 'list',
      message: 'Please choose from one of the following shape options',
      name: 'shape',
      choices: ["square", "circle", "triangle"]
    },
    {
        type: 'input',
        message: 'Enter a hexidecimal in order to choose the shape colour',
        name: 'shapeColours',
        validate: (input) => {
            if (hexPattern.test(input) === true) {
              return true;
            }
            return "Must be a valid hexidecimal code."
          },
      },
  ])
  .then((response) => {
    console.log("Success on making your logo!");
    logo.generateLogo(response);
    writeToFile(response);
  }
  );
}

  init();