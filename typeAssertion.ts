// TYPE ASSERTION

// 1) Angle bracket syntax
let name1: any = 'Mike'
let length1: number = 
(<string>name1).length

// 2) 'as' Syntax
let name2: any = 'John'
let length2: number = 
(name2 as string).length

// 3) Assertion with Union Type
let name3: string| number = '24'
let length3: number = 
(<string>name3).length
