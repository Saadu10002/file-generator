// TODO: Write code to define and export the Employee class
//creating class constructor for employee
class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
        
    }

    //returning name from input
    getName() {
return this.name;
    }
    //returning id from input
    getId() {
        return this.id;
    }

    //returning email from input
    getEmail() {
        return this.email;
    }
//returning employee type
    getRole() {
        return `Employee`;
    }
}
//to be exported
module.exports = Employee;