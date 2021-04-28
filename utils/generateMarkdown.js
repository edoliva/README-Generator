// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseTableOfContents(answer) {
//   console.log(answer.licenseTableOfContents);
//   if (answer.licenseTableOfContents) {var license = "- [License](#license)";
//   } else {var license = "";}
//   return license;
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//License badge function:
function renderLicenseBadgeURL(answer) {
  if (answer.licenseTableOfContents) {var licenseBadgeURL = answer.licenseBadgeURL;
  } else {var licenseBadgeURL = "";}
  return licenseBadgeURL;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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



// for (var i = 1; i <= 4; i++) {  
//   function screenshotDescriptioni(answer) {
//     if (answer.confrimScreenshoti) {var screenshotDescriptioni = answer.screenshotDescriptioni;
//     } else {var screenshotDescriptioni= "";}
//     return screenshotDescriptioni;
//   };
//   function screenshotURLi(answer) {
//     if (answer.confrimScreenshoti) {var screenshotURLi = answer.screenshotURLi;
//     } else {var screenshotURLi = "";}
//     return screenshotURLi;
//   };
// }

function screenshotDescription1(answer) {
  if (answer.confrimScreenshot1) {var screenshotDescription1 = answer.screenshotDescription1;
  } else {var screenshotDescription1= "";}
  return screenshotDescription1;
};
function screenshotURL1(answer) {
  if (answer.confrimScreenshot1) {var screenshotURL1 = answer.screenshotURL1;
  } else {var screenshotURL1 = "";}
  return screenshotURL1;
};
function screenshotDescription2(answer) {
  if (answer.confrimScreenshot2) {var screenshotDescription2 = answer.screenshotDescription2;
  } else {var screenshotDescription2= "";}
  return screenshotDescription2;
};
function screenshotURL2(answer) {
  if (answer.confrimScreenshot2) {var screenshotURL2 = answer.screenshotURL2;
  } else {var screenshotURL2 = "";}
  return screenshotURL2;
};
function screenshotDescription3(answer) {
  if (answer.confrimScreenshot3) {var screenshotDescription3 = answer.screenshotDescription3;
  } else {var screenshotDescription3= "";}
  return screenshotDescription3;
};
function screenshotURL3(answer) {
  if (answer.confrimScreenshot3) {var screenshotURL3 = answer.screenshotURL3;
  } else {var screenshotURL3 = "";}
  return screenshotURL3;
};
function screenshotDescription4(answer) {
  if (answer.confrimScreenshot4) {var screenshotDescription4 = answer.screenshotDescription4;
  } else {var screenshotDescription4= "";}
  return screenshotDescription4;
};
function screenshotURL4(answer) {
  if (answer.confrimScreenshot4) {var screenshotURL4 = answer.screenshotURL4;
  } else {var screenshotURL4 = "";}
  return screenshotURL4;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  console.log(answer);
  return `# ${answer.fileName}

## Project Description
${answer.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Criteria Checks and Tests](#criteria-checks-and-tests)
- [Usage and Coding](#usage/coding)
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
## Usage/coding:
${answer.usageCoding}
- Technology used in this application:
   ${answer.technologyUsed}\n
   ${answer.addtleTech}
   
${createScreenshotHeader(answer)}

${screenshotDescription1(answer)}
![${screenshotDescription1(answer)}](${screenshotURL1(answer)})
${screenshotDescription2(answer)}

${answer.screenshotDescription2 ? answer.screenshotDescription2 : ""}

![${screenshotDescription2(answer)}](${screenshotURL2(answer)})
${screenshotDescription3(answer)}
![${screenshotDescription3(answer)}](${screenshotURL3(answer)})
${screenshotDescription4(answer)}
![${screenshotDescription4(answer)}](${screenshotURL4(answer)})
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
${renderLicenseBadgeURL(answer)}\n
Confidential and Proprietary. All Rights Reserved.
`;
}

// ${renderLicenseBadge(answer.license)} 

module.exports = generateMarkdown;
