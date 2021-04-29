//License badge function:
function renderLicenseBadge(answer) {
  if (answer.licenseTableOfContents & answer.licenseType==="MIT") {var licenseBadgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }   else if (answer.licenseTableOfContents & answer.licenseType==="IBM") {var licenseBadgeURL = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }   else if (answer.licenseTableOfContents & answer.licenseType==="ISC") {var licenseBadgeURL = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }   else if (answer.licenseTableOfContents & answer.licenseType==="Mozilla") {var licenseBadgeURL = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }  else {var licenseBadgeURL = "";}
  return licenseBadgeURL;
};
//License notice function:
function renderLicenseNotice(answer) {
  if (answer.licenseTableOfContents & answer.licenseType==="MIT") {var licenseNoticeURL = "https://opensource.org/licenses/MIT";
  }   else if (answer.licenseTableOfContents & answer.licenseType==="IBM") {var licenseNoticeURL = "https://opensource.org/licenses/IPL-1.0";
  }   else if (answer.licenseTableOfContents & answer.licenseType==="ISC") {var licenseNoticeURL = "https://opensource.org/licenses/ISC)";
  }   else if (answer.licenseTableOfContents & answer.licenseType==="Mozilla") {var licenseNoticeURL = "https://opensource.org/licenses/MPL-2.0";
  }  else {var licenseNoticeURL = "";}
  return licenseNoticeURL;
};

//Screenshot functions:
function renderScreenshotTableOfContents(answer) {
  console.log(answer.confrimScreenshot1);
  if (answer.confrimScreenshot1) {var screenshot = "- [Screenshots](#screenshots)";
  } else {var screenshot = "";}
  return screenshot;
};
function createScreenshotHeader(answer) {
  if (answer.confrimScreenshot1) {var screenshotHeader = "## Screenshots"
  } else {var screenshotHeader = ""};
  return screenshotHeader;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  console.log(answer);
  return `${renderLicenseBadge(answer)}\n
  # ${answer.fileName}

## Project Description
${answer.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Criteria Checks and Tests](#criteria-checks-and-tests)
- [Usage and Coding](#usage-and-coding)
${renderScreenshotTableOfContents(answer)}
- [Contributing](#contributing)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)
## Installation
Deployed link: ${answer.deployedLink}\n
GitHub Repo link: ${answer.githubLink}
## Criteria-Checks-and-Tests
- ${answer.userCriteria}\n
- ${answer.Tests}
## Usage-and-Coding:
${answer.usageCoding}
- Technology used in this application:
   ${answer.technologyUsed}\n
   ${answer.addtleTech}
${createScreenshotHeader(answer)}
${answer.screenshotDescription1 ? answer.screenshotDescription1 : ""}
${answer.screenshotDescription1 ? "!["+answer.screenshotDescription1+"]("+answer.screenshotURL1+")" : ""}
${answer.screenshotDescription2 ? answer.screenshotDescription2 : ""}
${answer.screenshotDescription2 ? "!["+answer.screenshotDescription2+"]("+answer.screenshotURL2+")" : ""}
${answer.screenshotDescription3 ? answer.screenshotDescription3 : ""}
${answer.screenshotDescription3 ? "!["+answer.screenshotDescription3+"]("+answer.screenshotURL3+")" : ""}
${answer.screenshotDescription4 ? answer.screenshotDescription4 : ""}
${answer.screenshotDescription4 ? "!["+answer.screenshotDescription4+"]("+answer.screenshotURL4+")" : ""}
## Contributing
${answer.Contributing}
## Questions
Please direct any questions regarding this application to:
- GitHub username: ${answer.githubUsername}
- GitHub profile link: https://github.com/${answer.githubUsername}
- Email address: ${answer.email}  
## Credits
${answer.credits}
## License
© ${answer.publishYear} ${answer.creators}\n
${renderLicenseNotice(answer)}\n
Confidential and Proprietary. All Rights Reserved.
`;
}

// ${renderLicenseBadge(answer.license)} 

module.exports = generateMarkdown;
