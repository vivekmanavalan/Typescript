//Generics are used to create code that can reusable easily
// Here we have created a code without mentioning the type so that any type can be given as input
//We can also specify the type of input for this method using the extends keyword

function genericDetails<T extends object, U>(objA: T, objB : U){
    return Object.assign(objA,objB);
}

const displayGenerics = genericDetails({name: 'Vivek', hobbies:['basketball','reading']},{age:20});

console.log(displayGenerics);


interface Lengthy {
    length: number;
}

//Since length property is not known by generic because T could be string, number anything so we extended from interface
function countandsay<T extends Lengthy>(count: T): [T,string]{
    let desc = 'Got no value';
    if(count.length === 1){
        desc = 'Got 1 value';
    }
    else if(count.length >1){
        desc = 'Got more than 1 value';
    }

    return [count, desc];
}

console.log(countandsay([1]));
console.log(countandsay([]));
console.log(countandsay('Hey Pal'));
console.log(countandsay(''));


//Generic keyof property

function keyGeneric<T extends object, U extends keyof T>(objA : T, objB : U): T[U]{
    return objA[objB];
}
//If we send empty object and some key then will throw error since that key is not present in the object
//console.log(keyGeneric({},'name'))
console.log('The value for the key is',keyGeneric({name: 'vivek'},'name'));


//Partial generic
//Partial types are useful when you don't want to initialize everything at first instead we can initialize all
// the interface values ony by one maybe from an API too.
interface CourseGoal {
    title: string;
    desc : string;
    date: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
    //Partial 
    let courseGoal : Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.date = date;

    //From partial to normal we are changing the type. (Type casting)
    return courseGoal as CourseGoal;
}

console.log(createCourseGoal('Data Science','Studying data',new Date()))

