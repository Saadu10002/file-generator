// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//importing employee
const employee = require(`./employee`);
//creating class constructor for mamager
class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole(){
        return `Manager`
    }
}


module.exports = Manager;