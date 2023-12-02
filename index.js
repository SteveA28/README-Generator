const fs = require("fs");
const inquirer = require("inquirer");

function generateREADME(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.
![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(
    data.license
  )}-green)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}`;
}

inquirer
  .prompt([
    { type: "input", name: "title", message: "Enter project title:" },
    {
      type: "input",
      name: "description",
      message: "Enter project description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    { type: "input", name: "usage", message: "Enter usage information:" },
    {
      type: "list",
      name: "license",
      message: "Choose a license:",
      choices: ["MIT", "GPL", "Apache", "BSD", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
    },
    { type: "input", name: "tests", message: "Enter test instructions:" },
    { type: "input", name: "username", message: "Enter GitHub username:" },
    { type: "input", name: "email", message: "Enter email address:" },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) throw err;
      console.log("README.md has been successfully created!");
    });
  })
  .catch((error) => console.error(error));
