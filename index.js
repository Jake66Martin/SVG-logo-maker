const fs = require("fs")
const inquirer = require("inquirer")
const square = require("./Lib/square.js")
const circle = require("./Lib/circle.js")
const triangle = require("./Lib/triangle.js")
const hexPattern = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;


function writeToFile(response) {

  fs.writeFile(`${response.shape}.svg`, shapeData, (err) =>
    err ? console.error(err) : console.log('Mission success human!')
  );

  console.log(response);
}

function init() {
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
        choices: ["Square", "Circle", "Triangle"]
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



      if (response.shape === "Circle") {
        const circle1 = new circle.Circle(response.text, response.textColours, response.shapeColours)
        shapeData = circle1.render()
        writeToFile(response)
      } else if (response.shape === "Square") {
        const square1 = new square.Square(response.text, response.textColours, response.shapeColours)
        shapeData = square1.render()
        writeToFile(response)
      } else if (response.shape === "Triangle") {
        const triangle1 = new triangle.Triangle(response.text, response.textColours, response.shapeColours)
        shapeData = triangle1.render()
        writeToFile(response)
      }

    }
    );
}



init();





