// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(license) {
 if (license) {
   return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
 `;
 } else {
   return '';
 }
 }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  # Description

  ${data.desciption}
  
  ## desk-top
  
  ${data.desk_top}

  ## Table_of_Content
  
   *[Installation](#Installation)
   *[Usage](#Usage)
   *[License](#License)
   *[Tests](#Tests)
   *[Issues](#Issues)
   *[Github URL](#Github URL)
   *[Your email](#Your email)
   *[Installation](#Installation)
   

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## license

  ${renderLicenseBadge(data.license)}
  
  ${data.license}

  ## contributing

  ${data.contributing}

  ## test 
  
  ${data.test}

  ## Issues

  
  ${data.Issues}

  ## Github_url

  ${data.Github_url}

 ## email

  ${data.email}


  
  

`;
}

 module.exports = generateMarkdown;
