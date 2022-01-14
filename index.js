// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const generatePage = require ("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'name your project'
    },
    {
        type:'input',
        name: 'description',
        message: 'describe your project'
    },
    {
        type:'input',
        name: 'contribution',
        message: 'how do you make a contribution to this project?'
    },
    {
        type:'input',
        name: 'testing',
        message: 'what are the instructions on testing this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the installation instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what software license do you have?',
        choices: ['MIT', 'Apache', 'GPL', 'Mozilla'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your eMail?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, error => {
        if (error) {throw new Error(error)}
        console.log("page is complete")
    })
}
const prompt = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to initialize app
function init() {
    prompt ()
    .then ((data) => {
        return writeToFile("./finished/README.md", generatePage(data))
    })
    .catch (error => {
        console.log(error)
    })
}

// Function call to initialize app
init();
