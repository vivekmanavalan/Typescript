export {}

let name ="Hello world. Welcome to Typescript";

console.log(name)

let first_name : string;

first_name = 'Vivek';

console.log(first_name)


let age: number = 24;
console.log(age);

//suppose if we get the value from API and we don't know if it will be null or some value
// ?? is the null coalescing operator

let hobby : string;

hobby = undefined ?? 'No Hobby';

console.log(hobby);

let normalfunc : () => void =() => console.log('Empty func')

normalfunc();


let stringfunc: (name: string) => string = temp => {return temp};

console.log(stringfunc('Tharun'))

//In any type you can call that variable as function or anything you want

let gender : any  =10;

gender = true;

gender = 'male';

console.log("Gender",gender.toUpperCase());


//In unknown type you can only change the types of the variable but cannot do additional operations in advance 

//like touppercase.

let marital : unknown = 24;

marital = 'single';

console.log("Marital status", marital)

//If you are confident that the value of unknown is string from the API then you can explicitly tell that

// it is a string

console.log("Uppercase explicitly", (marital as string).toUpperCase())