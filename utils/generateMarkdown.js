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
function renderLicenseBadgeURL(answer) {
  if (answer.licenseTableOfContents) {var licenseBadgeURL = answer.licenseBadgeURL;
  } else {var licenseBadgeURL = "";}
  return licenseBadgeURL;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderScreenshotTableOfContents(answer) {
  console.log(answer.screenshotTableOfContents);
  if (answer.screenshotTableOfContents) {var screenshot = "- [Screenshots](#screenshots)";
  } else {var screenshot = "";}
  return screenshot;
};

function createScreenshotHeader(answer) {
  if (answer.screenshotTableOfContents) {var screenshotHeader = "## Screenshots"
  } else {var screenshotHeader = ""};
  return screenshotHeader;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  console.log(answer);
  return `# ${answer.fileName}

## Project Description
${answer.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Criteria Checks](#criteria)
- [Usage and Coding](#Usage/coding)
${renderScreenshotTableOfContents(answer)}
- [Credits](#credits)
- [License](#license)
## Installation
Deployed link: "${answer.deployedLink}"\n
GitHub Repo link: "${answer.githubLink}"
## Criteria
${answer.userCriteria}
## Usage/coding:
${answer.usageCoding}
- Technology used in this application:
   ${answer.technologyUsed}\n
   ${answer.addtleTech}
${createScreenshotHeader(answer)}
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
