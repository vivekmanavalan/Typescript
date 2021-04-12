class Car {
    drive(){
        console.log("Driving car...");
    }
}

class Truck {
    drive(){
        console.log("Driving truck...");
    }
    loadCargo(){
        console.log('Loading cargo....')
    }
}

//Union operatore | which means either this or that
type Vehicle = Car | Truck ;

function displays(vehicle: Vehicle){
    vehicle.drive();
    //Checking the type of variable.
    if(vehicle instanceof Truck){
        vehicle.loadCargo();
    }
}

const v1 = new Car();
const v2 = new Truck();

displays(v1);
displays(v2);
