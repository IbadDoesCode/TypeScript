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
