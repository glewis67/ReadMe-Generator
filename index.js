// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
var fs = require('fs');
const path=require("path")

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is the title of your project?"
    },
    
    {
        type: "input",
        name: "desciption",
        message: "A brief description of your project?"
    },
   
   {
        type: "input",
        name: "desk_top",
        message: "what is the project desk top url or screencastify ?"
   },

   {
        type: "checkbox",
        name: "Table_of_Contents",
        message:  "what sujects are in your Table of Contents?", 
        choices: [
    
                "Instalation",
                "Usage",
                "License",
                "Contributing",
                "Tests",
                "Issues",
                "Github URL",
                "Your email",
            
            ]
    
    },

    {
        type: "input",
        name: "Installation",
        message: "Decribe the installation process in your project if its any?"
            
    },

    {
        type: "input",
        name: "Usage",
        message: "What is the usage in the project?"
 
   },

   {
        type: "list",
        name: "license",
        message: "Which license is being used for your project?",
        choices: [

            "Academic",
            "Apache",
            "ISC",
            "MIT",
            "GNU",
            "Open",
            "Mozilla"
        ]

    },

    {
        type: "input",
        name: "contributing",
        message: "who are the to your contributors to the  project?"
    },
    {
        type: "list",
        name: "test",
        message: "Does your project needed to be tested?",
        choices:[

            "yes",
            "no",
        ]
    },

    {
        type: "input",
        name: "Issues",
        message: "A brief description if your project had any issues?"
    },


    {
        type: "input",
        name: "Github_url",
        message: "Please enter your Github url?"

    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email?"
    },

];

// inquirer.prompt(questions).then(function(answers){
//     console.log(answers.title
//     );
// })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// var fs = require('fs');

// fs.writeFile("output.txt", "Hello World!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("File saved successfully!");
// });

// // TODO: Create a function to initialize app
// function init() {

// try{
//     const answers = await promptUser();
//     const generateContent = generateReadme(answers);  
// }

// // function init() {
//   // initialisation stuff here

//   function int() {

//   }

// // elsewhere in code
// init();

// }

function init(){
    inquirer.prompt( questions)
        .then((answers) => {
            console.log(answers)
            writeTofile("readme.md",generateMarkdown({...answers}))         
        })
 }
function writeTofile(filename,data){
    return fs.writeFileSync(path.join(process.cwd(),filename),data)
} 
init()
