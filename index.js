const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//empty array to store team member object
const teamMembers = []
//empty array to store team member IDS
const idList = []



function startApp () {
    //creating options for the users
    function createTeam () {
        inquirer.prompt([{
            type:`list`,
            name: `choice`,
            message: `what would you like to add?`,
            choices: [`Manager`, `Engineer`, `Intern`, `None`]
        }]).then(userInput => {
            if(userInput.choice ===`Manager`) {
                addManager();
            }else if(userInput.choice === `Engineer`) {
                addEngineer();
            }else if(userInput.choice === `Intern`) {
                addIntern();
            }else {
                buildTeam();
            }
        })
    }
}
//creating manager info
function createManager() {

    inquirer.prompt([
        {
            type: `input`,
            name: `managerName`,
            message: `name of the team's manager?`,
        },

        { type: `input`,
        name: `managerId`,
        message: `team's manager id`,

        },

        { type: `input`,
        name: `managerEmail`,
        message: `team's manager email?`,
            
        },

        {
            type: `input`,
            name: `managerOfficeNumber`,
            message: `what is the office's number of the manager?`
        }
    ]).then(managerResponse => {
        const manager = new manager(managerResponses.managerName, managerResponses.managerId, managerResponses.managerEmail, managerResponses.managerOfficeNumber);
        teamMembers.push(manager);
        idList.push(managerResponses.managerId);
    
    })
    createManager();
}

startApp();