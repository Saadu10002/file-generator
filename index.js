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
// //empty array to store team member IDS
const idList = []
const startApp = () =>{
    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }

        fs.writeFileSync(outputPath, render(teamMembers), `utf-8`);
        console.log("Your generated team is in output folder");
    }
};




// function startApp () {

// function startApp () {
    //creating options for the users
    function createTeam  ()  {
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
                createTeam();
            }
        })
    }
// }
//creating manager info
// const createTeam = () =>{
function addManager() {
    inquirer.prompt([
        {
            type: `input`,
            name: `managerName`,
            message: `what is the manager's name?`,
        },

        { type: `input`,
        name: `managerId`,
        message: `what is the manager's id`,

        },

        { type: `input`,
        name: `managerEmail`,
        message: `what is the manager's email address?`,
            
        },

        {
            type: `input`,
            name: `managerOfficeNumber`,
            message: `what is the office's number of the manager?`
        }
    ]).then(responses => {
        const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNumber);
        console.log(manager);
        teamMembers.push(manager);
        idList.push(responses.managerId);
        
      createTeam();
    });
    // createManager();
}


// createManager();

//creating engineer info
function addEngineer() {
    inquirer.prompt([
        {
            type: `input`,
            name: `engineerName`,
            message: `what is the name of engineer?`
        },

        {
            type: `input`,
            name: `engineerId`,
            message: `what is the id of the engineer?`,

        },
        {
            type: `input`,
            name: `engineerEmail`,
            message: `what is the email address of engineer?`
        },

        {
            type: `input`,
            name: `engineerGithub`,
            message: `what is the engineer's github username?`
        }

    ]).then(responses => {
        const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineergithub);
        teamMembers.push(engineer);
        idList.push(responses.engineerId);
        console.log(engineer);
        createTeam();
    });

}


// createEngineer();
// createManager();
//creating intern info
function addIntern() {
    inquirer.prompt([
        {
            type: `input`,
            name: `internName`,
            message: `what is the name of intern?`
        },

        {
            type: `input`,
            name: `internId`,
            message: `what is the id of intern?`
        },

        {
            type: `input`,
            name: `internEmail`,
            message: `what is the email address of intern?`
        },

        {
            type: `input`,
            name: `internSchool`,
            message: `what is the name of intern's school?`
        }
    ]).then(responses => {
        const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
        teamMembers.push(intern);
        idList.push(responses.engineerId);
        console.log(intern);
       createTeam();
    });
}


startApp();
createTeam (); 