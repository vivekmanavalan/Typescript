//Interface are used to define the structure of the object it is similar to what it is in java

interface Games {
    name: string,
    region: string,
    display(): string
}

interface Vehicles {
    //Here we tell the interface the we  don't know that object name as well as values but the type will be string
    //We can only add string as key and string as value since we specified the type.
    [prop: string] : string;
}

let details: Games;

let vehicle: Vehicles;

details = {
    name: 'Basketball',
    region: 'America',
    display(){
        return `The game that i play is ${details.name} it is popular in ${details.region}`;
    }
}

vehicle = {
    name: 'Tesla',
    region: 'America'
}

console.log(details.display());

console.log(vehicle);