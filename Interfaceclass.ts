interface Lakers {
    captain: string,
    keyPlayers: string[],
    lakersDetails(): string
}

interface GSW {
    captain: string,
    keyPlayers: string[],
    gswDetails(): string
}

//We can implement multiple interface and also extends an interface with another interface also like
//GSW extends Lakers. 
//All the interface methods needs to be implemented.
class Basketball implements Lakers,GSW {

    constructor(public captain: string, public keyPlayers: string[]){
        this.captain = captain;
        this.keyPlayers = keyPlayers;
    }

    lakersDetails(){
        return `The Lakers team is captained by ${this.captain}
                Some of the key players in that team are ${this.keyPlayers.toString()}`
    }

    gswDetails(){
        return `The Gsw team is captained by ${this.captain}
        Some of the key players in that team are ${this.keyPlayers.toString()}`
    }
}

let bobj = new Basketball('Lebron', ['AD', 'Kuz', 'KCP', 'Drummond','Schroder']);

console.log(bobj.lakersDetails());

bobj = new Basketball('Curry',['Green','Klay','Wiggins']);

console.log(bobj.gswDetails());

