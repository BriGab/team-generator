const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const internPosition = [];

const managerPosition = [];

const engineerPosition = [];

createTeam ();
function createTeam () {
inquirer.prompt ([
    {
        type:"input",
        message:"What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },
    {
        type: "list",
        message: "Select your position: ",
        name: "role",
        choices: [
            "Intern",
            "Manager",
            "Engineer"
        ]
    }
]).then(function(answer){
    switch(answer.role) {
        case "Intern":
        getIntern(answer);
        break;

        case "Manager":
        getManager(answer);
        break;

        case "Engineer":
        getEngineer(answer);
        break;
    }
})
}

function getIntern(answer){
    inquirer.prompt([
        {
        name: "school",
        type: "input",
        message: "What is the name of your school?"
        }
    ]).then(function(school){
        const intern = new Intern(answer.name, answer.id, answer.email, school.school)
        internPosition.push(intern)
        for (let i=0; i < internPosition.length; i++) {
        console.log(internPosition)
        }
        createTeam();
        
    })

}

function getManager(answer) {
    inquirer.prompt ([
        {
            name: "officeNumber",
            type: "number",
            message: "What is your office number?"
        }
    ]).then(function(officeNumber){
        const manager = new Manager(answer.name, answer.id, answer.email, officeNumber.officeNumber)
        managerPosition.push(manager)
        console.log(officeNumber)
        console.log(manager)
        createTeam();
    })

}

function getEngineer(answer){
    inquirer.prompt ([
        {
            name: "github",
            type:"input",
            message: "What is your github username?"
        }
    ]).then(function(github){
        const engineer = new Engineer(answer.name, answer.id,answer.email, github.github)
        engineerPosition.push(engineer)
        console.log(github)
        console.log(engineer)
        console.log(engineerPosition)
        createTeam();
    })
}