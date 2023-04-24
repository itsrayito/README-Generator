// this will prompt the packages needed for this application
const {writeFile} = require('fs').promises;
const { prompt } = require('inquirer');
const renderLicenseBadge = require('./utils/generateMarkdown');

// the questions the user will be answering in order for the README to generate
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "What is GitHub username?",
        name: 'userName'
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "Describe your project in a short description.",
        name: 'description'
    },
    {
        type: 'list',
        message: "Would this contain a screenshot of your project?",
        name: 'screenshot',
        choices: ['YES', 'NO']
    },
    {
        type: 'input',
        message: "How do you install this application?",
        name: 'installation'
    },
    {
        type: 'list',
        message: "Select the type of license your application will have?",
        name: 'license',
        choices: ['Artistic', 'Apache', 'MIT', 'BSD', 'GNU', 'Mozilla', 'NONE']
    },
    {
        type: 'input',
        message: "What type of command should be ran to install the dependencies for your project?",
        name: 'dependencies'
    },
    {
        type: 'input',
        message: "What type of command should be ran to perform tests on your project?",
        name: 'tests'
    },
    {
        type: 'input',
        message: "Is there a way the user should use the repo?",
        name: 'needToKnow'
    },
    {
        type: 'input',
        message: "How can the user do any contributions to this project?",
        name: 'openSource'
    },
    {
        type: 'input',
        message: "Was there any collaborations involved for this project?",
        name: 'credits'
    },
];

// this is going to start the application
async function init() {
    try {
        const answers = await prompt(questions);
        await renderLicenseBadge(answers);
        await writeFile('../README.md', markdown);
        console.log('ReadMe has been Generated!');

    } catch (err) {
        console.log(err);
    }
}

// this will start up the application
init();
