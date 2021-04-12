class Student {

    //one way to initialize a variable 
    readonly name: string;
    public gender: string;
    //you can also initialize like age it will automatically consider it as variable
    constructor(name: string, private age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    //below is the function initialization
    display(){
        console.log(`The details of the student are given below
                            Name: ${this.name}
                            Age: ${this.age}
                            Gender: ${this.gender}`)
    }


}

//Passing arguments to parameters in constructor since on object creation constructor will be called automatically
const obj = new Student('Vivek',24,'Male');

obj.display();

//Cannot update the age because it is private and cannot be accessed outside the class
// obj.age = 25;

obj.gender = 'Not updated';

//cannot update the name because it is specified as readonly
//obj.name = 'paplu';

obj.display();
