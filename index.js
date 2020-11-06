// array of questions for user
const questions = [
"What is the name of your project?",
'what is the application for?',
'how do you plan on using this application?',
'what technologies did you need to create this application?', 
'what contributes did you have on this application?',
];

// function to write README file
const fs = require('fs');
function writeToFile(fileName, data) {
    fs.writeFile('readME.md','ust8', (data))
    console.log(writeToFile(readMe, questions))
}
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'name',
    },
    {
      type: 'input',
      message: "what is the application for?",
      name: 'purpose',
    },
    {
      type: 'input',
      message: ' how do you plan on using this application?',
      name: 'plans',
    },
    {
        type: 'checkbox',
        message: 'what technologies did you need to create this application?',
        name: 'technologies',
        choices : [
            'HTML',
            'CSS',
            'JAVASCRIPT',
            'REACT.JS',
            'NODE.JS'
        ]
      },
      {
        type: 'input',
        message: 'what contributes did you have on this application?',
        name: 'contributes',
      },
  ])
  .then((response) =>
    response.co === response.password
      ? console.log('ReadME file has been generated successfully!')
      : console.log('You forgot your password already?!')
  );


// function to initialize program
function init() {
    
}

// function call to initialize program
init();
