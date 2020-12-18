
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const inquirer = require('inquirer');

const promptUser = () =>
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
        },
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'installation',
        },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
        },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution',
        },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
        },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'liscense',
        choices: ['MIT', 'Apache Liscense 2.0', 'Artistic Licesnse 2.0', 'Boost Software License', 'ISC License', 'Open Software License' ]
        },
    {
        type: 'input',
        message: 'Enter your GitHub unsername',
        name: 'username',
        },
    {
        type: 'input',
        message: 'Enter your GitHub repo link',
        name: 'link',
        },
    {
        type: 'input',
        message: 'Enter your Email',
        name: 'email',
        },
])
// HTML
const generateHTML = (response) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <title>README</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <div class="row">
        <h1 class="display-4"><strong> ${response.title} </strong></h1>
    </div>
    </div>
    <hr>
    <ul class="list-unstyled">
        <h2 class="display-5">Table of Contents</h2>
        <ul>
        <li><a href="#install">Installation Instructions</a></li>
        <li><a href="#usage">Usage Information</a></li>
        <li><a href="#contribution">Contribution Guidelines</a></li>
        <li><a href="#test">Test Instructions</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#questions">Questions</a></li>
        </ul>
    </ul>
    <hr>
    <div class="container">
        <div class="row">
        <h2 class="display-5">Description</h2>
        <p>${response.description}</p>
    </div>
    </div>
    <div class="container">
        <div class="row" id="install">
        <h2 class="display-5">Installation Instructions</h2>
        <p>${response.installation}</p>
    </div>
    </div>
    <div class="container">
        <div class="row" id="usage">
        <h2 class="display-5">Usage Information</h2>
        <p>${response.usage}</p>
    </div>
    </div>
    <div class="container">
        <div class="row" id="contribution">
        <h2 class="display-5">Contribution Guidelines</h2>
        <p>${response.contribution}</p>
    </div>
    </div>
    <div class="container">
        <div class="row" id="test">
        <h2 class="display-5">Test Instructions</h2>
        <p>${response.test}</p>
    </div>
    </div>
    <div class="container">
        <div class="row" id="license">
        <h2 class="display-5">License</h2>
        <p>${response.license}</p>
    </div>
    </div>
    <div class="container">
        <div class="row" id="questions">
        <h2 class="display-4"><strong>Questions</strong></h2>
        <hr>
        <h2 class="display-5">GitHub</h2>
        <h3 class="display-6">Username</h3>
        <p>${response.username}</p>
        <div class="row">
        <h3>GitHub Repo Link</h3>
        <a href="${response.link}"> </a>
        <h3 class="display-6">Email</h3>
        <p>${response.email}</p>
    </div>
    </div>
</div>
</body>
</html>`;

// generate HTML file
promptUser()
  .then((response) => {
      writeFileAsync('index.html', generateHTML(response));
  })

  .then(() => {
   console.log('created HTML');
})

  .catch((error) => {
    console.error(error);
  })




