// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [ 
  {type: 'input', name: 'fileName', message: 'REQUIRED: What is title of this Read Me?',},
  {type: 'input', name: 'projectDescription', message: 'REQUIRED: Enter a description of this project.',},
  {type: 'input', name: 'deployedLink', message: 'REQUIRED: Enter the deployed/live link for this project.',},
  {type: 'input', name: 'githubLink', message: 'REQUIRED: Enter the GitHub Repo link.',},
  {type: 'input', name: 'userCriteria', message: 'REQUIRED: What must the user do or know when using this application?',},
  {type: 'input', name: 'Tests', message: 'REQUIRED: Enter test instructions.',},
  {type: 'input', name: 'githubUsername', message: 'REQUIRED: Enter your GitHub username.',},
  {type: 'input', name: 'email', message: 'REQUIRED: Enter your email address.',},
  {type: 'input', name: 'Contributing', message: 'REQUIRED: How can a user best contribute to this application?',},
  {type: 'input', name: 'usageCoding', message: 'REQUIRED: How does the code work? What is the user experience like?',},
    // screenshot questions
    // screenshot 1
    {type: 'confirm', name: 'confrimScreenshot1', message: 'Will you be inserting any screenshots hosted by a public domain? You will be able to insert up to 4 screenshots.',}, 
    {type: 'input', name: 'screenshotDescription1', message: 'Optional: What is this a screenshot of?', when:function(answer){return answer.confrimScreenshot1}},
    {type: 'input', name: 'screenshotURL1', message: 'REQUIRED: Enter the full and complete screenhot URL:', when:function(answer){return answer.confrimScreenshot1}},
    // screenshot 2
    {type: 'confirm', name: 'confrimScreenshot2', message: 'Do you want to insert a 2nd screenshot hosted by a publuc domain?', when:function(answer){return answer.confrimScreenshot1}}, 
    {type: 'input', name: 'screenshotDescription2', message: 'Optional: What is this a screenshot of?', when:function(answer){return answer.confrimScreenshot2}},
    {type: 'input', name: 'screenshotURL2', message: 'REQUIRED: Enter the full and complete screenhot URL:', when:function(answer){return answer.confrimScreenshot2}},
    // screenshot 3
    {type: 'confirm', name: 'confrimScreenshot3', message: 'Do you want to insert a 3rd screenshot hosted by a publuc domain?', when:function(answer){return answer.confrimScreenshot2}}, 
    {type: 'input', name: 'screenshotDescription3', message: 'Optional: What is this a screenshot of?', when:function(answer){return answer.confrimScreenshot3}},
    {type: 'input', name: 'screenshotURL3', message: 'REQUIRED: Enter the full and complete screenhot URL:', when:function(answer){return answer.confrimScreenshot3}},
    // screenshot 4
    {type: 'confirm', name: 'confrimScreenshot4', message: 'Do you want to insert a 4th screenshot hosted by a publuc domain?', when:function(answer){return answer.confrimScreenshot3}}, 
    {type: 'input', name: 'screenshotDescription4', message: 'Optional: What is this a screenshot of?', when:function(answer){return answer.confrimScreenshot4}},
    {type: 'input', name: 'screenshotURL4', message: 'REQUIRED: Enter the full and complete screenhot URL:', when:function(answer){return answer.confrimScreenshot4}},
  // technology used in the applications creation
  { type: 'checkbox',
    message: '(Not required): Check off any of these commonly used technologies. You will be given an opportuity to manually enter others as well.',
    name: 'technologyUsed',
    choices: ['HTML', ' CSS', ' JS', ' DOM', ' AJAX', ' node.js', ' Bootstrap', ' Foundation', ' Semantic UI', ' Angular', ' Vue.js', ' Ember.js', ' React', ' jQuery', ' D3.js', ' XML', ' RESR', ' GraphQL'],},
  {type: 'input', name: 'addtleTech', message: '(Not required): Is there any additional technology used that was not listed above? If not, press ENTER/RETURN.',},
  {type: 'input', name: 'publishYear', message: 'Enter the year this application was created.',},
  {type: 'input', name: 'creators', message: 'Enter your name/username, and the names/usernames of any direct collaborators.',},
  {type: 'input', name: 'credits', message: '(Credits) Enter the names of all people or organizations that helped make this application possible, other than direct collaborators.',},
  {type: 'confirm', name: 'licenseTableOfContents', message: 'REQUIRED: Will your read me need a license?',}, 
  // license types
  { type: "list",
    name: "licenseType",
    message: "Choose the license type you would like:",
    choices: ["MIT", "IBM", "ISC", "Mozilla"],
    when:function(answer){return answer.licenseTableOfContents}
  },
];

function writeToFile(file, data) {
    fs.writeFile(file, data, (err) =>
    err ? console.log(err) : console.log('Your README is ready!')
    );
}

// Function to initialize app
function init() {
    inquirer
    .prompt(
      questions
  )
  
  // Function to write README file
  .then( (answers) => {
      const fileName = `README-${answers.fileName.split(' ').join('')}.md`;
      const tempLit = generateMarkdown (answers);
      writeToFile (fileName, tempLit);
  });
}

// Function call to initialize app
init();
