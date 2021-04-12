"use strict";
class Car {
    drive() {
        console.log("Driving car...");
    }
}
class Truck {
    drive() {
        console.log("Driving truck...");
    }
    loadCargo() {
        console.log('Loading cargo....');
    }
}
function displays(vehicle) {
    vehicle.drive();
    //Checking the type of variable.
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
const v1 = new Car();
const v2 = new Truck();
displays(v1);
displays(v2);
