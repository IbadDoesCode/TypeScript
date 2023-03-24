// Function with type parameter & return type
function add (a: number, b: number) {
    return a + b
}

// Function with optional parameter
function greet (name?: string): void {
    console.log(`Hello, ${name ?? `world`}!`)
}

// Function with default parameters
function repeat (text:string, times: number = 3) : string {
    return text.repeat(times)
}
// times: number = 3 is the default parameter...

// Function with Rest Parameter
function sum (...values: number[]): number {
    return values.reduce((a,b) => a + b, 0)
}

// number[] shows an array type
