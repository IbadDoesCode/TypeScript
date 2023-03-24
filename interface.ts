// Interfaces - Basic Interface

// Basic interface is 
// much same like a Class
interface Person {
    name: string
    age: number
}

// Interface with Optional Property
interface Person {
    name: string
    myAge?: number
}

// Interface with Function Property
interface Calculator {
    add (a: number, b: number)
    : number
}
