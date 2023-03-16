// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//importing employee constructor
const Employee = require("./Employee");


//creating class contructor for Engineer

class Engineer extends Employee {
    constructor(name, id,email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github 
    }
    // getRole() {
    //     return `Engineer`
    // }

} 


module.exports = Engineer;