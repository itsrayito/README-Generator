// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
    const { license } = answers;
    if (license != 'None') {

        const licenseLink = `https://img.shields.io/static/v1?label=License&message=${license}&color=$blue`
        const licenseBadge = `![license](https://shields.io/static/v1?label=License&message=${license}&color=$blue)`
        return renderLicenseSection(answers, licenseLink, licenseBadge);

    } else {

        const licenseLink = '';
        const licenseBadge = '';
        return renderLicenseSection(answers, licenseLink, licenseBadge);
    }
}

// this is going to build a section containing the license for the markdown.js
function renderLicenseSection(answers, licenseLink, licenseBadge, license){
    if (license != 'None') {
        const licenseSection =
        `Be Aware: this application is under the ${licenseBadge} license.`
        return renderScreenshot(answers, licenseSection, licenseBadge, licenseLink)

    } else {
        const licenseSection =
        `Be Aware: this application is not under a license.`
        return renderScreenshot(answers, licenseSection, licenseBadge, licenseLink)
    }
}
function renderScreenshot(answers, licenseSection, licenseBadge, licenseLink) {
    const {screenshot} = answers;

    if (screenshot === 'YES') {
        const screenshotLink = `![screenshot of application]()`
        return generateMarkdown(answers, licenseSection, licenseBadge, licenseLink, screenshotLink);
    } else {
        const screenshotLink = '';
        return generateMarkdown(answers, licenseSection, licenseBadge, licenseLink, screenshotLink);
    }
}

// this is going to generate the markdown for the README and creates it
function generateMarkdown(answers, licenseSection, licenseBadge, licenseLink, screenshotLink) {
    const { title, userName, email, description, dependencies, tests, needToKnow, installation, openSource, credits } = answers;
    return markdown =
    `# ${title}
    ${licenseBadge}
    ## Description
    ${description}
    <font size='2'>
    
    ## Table of Contents
    * [Installation](#installation)\n
    * [Usage](#usage)\n
    * [License](#license)\n
    * [Contributing](#contributing)\n
    * [Tests](#tests)\n
    * [Questions](#questions)\n
    * [Credits](#credits)\n
    </font>
    
    ## Installation
    ${installation}
    In order to install, run the following command in the Command-Line Interface ${dependencies}.
    
    ## Usage
    ${needToKnow}\n\n
    ${screenshotLink}
    
    ## License
    ${licenseSection}\n
    Link: ${licenseLink}
    
    ## Contributing
    ${openSource}
    
    ## Tests
    To test out your application, run the following command in the Command-Line Interface ${tests}.
    
    ## Questions
    Do not hesitate to contact me below if any questions or comments arise. \n
    
    GitHub: [${userName}](https://github.com/${userName})\n
    Email: ${email}
    
    ## Credits
    ${credits}`;

}

module.exports = renderLicenseBadge
