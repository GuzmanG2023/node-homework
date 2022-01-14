// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![alt text](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseString = ''
  if (license === 'MIT') {licenseString = 'mit'}
  else if (license === 'Apache') {licenseString = 'apache-2.0'}
  else if (license === 'GPL') {licenseString = 'gpl-3.0'}
  else if (license === 'Mozilla') {licenseString = 'mpl-2.0'}
  return `https://choosealicense.com/licenses/${licenseString}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  return `# License
  * ${renderLicenseBadge (license)}
  * ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description 
  ${data.description}
  # Table of Contents
  * [Contribution](#Contribution)
  * [Testing](#Testing)
  * [Installation](#Installation)
  * [License](#License)
  * [Questions](#Questions)

  # Contribution
  ${data.contribution}
  # Testing
  ${data.testing}
  # Installation
  ${data.installation}
  ${renderLicenseSection(data.license)}
  # Questions
  * https://github.com/${data.github}
  * eMail ${data.email}
`;
}

module.exports = generateMarkdown;
