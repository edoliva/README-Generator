// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// console.log(fs);

// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'fileName',
    message: 'REQUIRED: What is title of this Read Me?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'REQUIRED: Enter a description of this project.',
  },
  {
    type: 'input',
    name: 'deployedLink',
    message: 'REQUIRED: Enter the deployed/live link for this project.',
  },
  {
    type: 'input',
    name: 'githubLink',
    message: 'REQUIRED: Enter the GitHub Repo link.',
  },
  {
    type: 'input',
    name: 'userCriteria',
    message: 'REQUIRED: What must the user do or know when using this application?',
  },
  {
    type: 'input',
    name: 'usageCoding',
    message: 'REQUIRED: How does the code work? What is the user experience like?',
  },
  {
    type: 'confirm',
    name: 'screenshotTableOfContents',
    message: 'REQUIRED: Will you be inserting any screenshots hosted by a public domain?',
  }, 
  {
    type: 'list',
    name: 'screenshotNumber',
    message: 'REQUIRED: How many screenshots will you enter? (4 max)',
    choices: [1, 2, 3, 4],
    when:function(answer){return answer.screenshotTableOfContents}
  },
  {
    type: 'checkbox',
    message: '(Not required): Check off any of these commonly used technologies. You will be given an opportuity to manually enter others as well.',
    name: 'technologyUsed',
    choices: ['HTML', ' CSS', ' JS', ' DOM', ' AJAX', ' node.js', ' Bootstrap', ' Foundation', ' Semantic UI', ' Angular', ' Vue.js', ' Ember.js', ' React', ' jQuery', ' D3.js', ' XML', ' RESR', ' GraphQL'],
  },
  {
    type: 'input',
    name: 'addtleTech',
    message: '(Not required): Is there any additional technology used that was not listed above? If not, press ENTER/RETURN.',
  },
  {
    type: 'input',
    name: 'publishYear',
    message: 'Enter the year this application was created.',
  },
  {
    type: 'input',
    name: 'creators',
    message: 'Enter your name/username, and the names/usernames of any direct collaborators.',
  },
  {
    type: 'input',
    name: 'credits',
    message: '(Credits) Enter the names of all people or organizations that helped make this application possible, other than direct collaborators.',
  },
  {
    type: 'confirm',
    name: 'licenseTableOfContents',
    message: 'REQUIRED: Will your read me need a license?',
  }, 
  {
    type: 'input',
    name: 'licenseBadgeURL',
    message: 'REQUIRED: Enter the full and complete license badge URL. You may enter multiple URLS:',
    when:function(answer){return answer.licenseTableOfContents}
  },

  // {
  //   type: 'input',
  //   name: 'urls',
  //   message: 'Enter those urls here:',
  // },
];

function writeToFile(file, data) {
    fs.writeFile(file, data, (err) =>
    err ? console.log(err) : console.log('Your README is ready!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
      questions
  )
  
  // TODO: Create a function to write README file
  .then( (answers) => {
      const fileName = `README-${answers.fileName.split(' ').join('')}.md`;
      const tempLit = generateMarkdown (answers);
      writeToFile (fileName, tempLit);
  });
}

// Function call to initialize app
init();
