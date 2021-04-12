"use strict";
//Generics are used to create code that can reusable easily
// Here we have created a code without mentioning the type so that any type can be given as input
//We can also specify the type of input for this method using the extends keyword
function genericDetails(objA, objB) {
    return Object.assign(objA, objB);
}
const displayGenerics = genericDetails({ name: 'Vivek', hobbies: ['basketball', 'reading'] }, { age: 20 });
console.log(displayGenerics);
//Since length property is not known by generic because T could be string, number anything so we extended from interface
function countandsay(count) {
    let desc = 'Got no value';
    if (count.length === 1) {
        desc = 'Got 1 value';
    }
    else if (count.length > 1) {
        desc = 'Got more than 1 value';
    }
    return [count, desc];
}
console.log(countandsay([1]));
console.log(countandsay([]));
console.log(countandsay('Hey Pal'));
console.log(countandsay(''));
//Generic keyof property
function keyGeneric(objA, objB) {
    return objA[objB];
}
//If we send empty object and some key then will throw error since that key is not present in the object
//console.log(keyGeneric({},'name'))
console.log('The value for the key is', keyGeneric({ name: 'vivek' }, 'name'));
function createCourseGoal(title, desc, date) {
    //Partial 
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.date = date;
    //From partial to normal we are changing the type. (Type casting)
    return courseGoal;
}
console.log(createCourseGoal('Data Science', 'Studying data', new Date()));
