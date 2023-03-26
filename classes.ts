// Classes

//TS Class with Constructor & Methods
class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) {}

    getFullName(): string {
        return `${this.firstName} 
        ${this.lastName}`
    }
}

// Class Inheritance
class Student extends Person {
    constructor (firstName: string,
    lastName: string, age: number, 
    public studentID: number       
    ) {
        super (firstName, 
            lastName, age)
    }
    getStudentInfo():string {
        return `${this.getFullName()}`
    }
}

