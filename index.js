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
![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-green)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}`;
}