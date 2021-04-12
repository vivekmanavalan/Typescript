"use strict";
//Interface are used to define the structure of the object it is similar to what it is in java
let details;
let vehicle;
details = {
    name: 'Basketball',
    region: 'America',
    display() {
        return `The game that i play is ${details.name} it is popular in ${details.region}`;
    }
};
vehicle = {
    name: 'Tesla',
    region: 'America'
};
console.log(details.display());
console.log(vehicle);
