"use strict";
class Students {
    //you can also initialize like age it will automatically consider it as variable
    constructor(name, age, gender) {
        this.age = age;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    //below is the function initialization
    display() {
        console.log(`The details of the student are given below
                            Name: ${this.name}
                            Age: ${this.age}
                            Gender: ${this.gender}`);
    }
}
//Inheriting the Student class and its properties
class Courses extends Students {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.availableCourses = [];
    }
    //Getter and setters in typescript
    get courses() {
        return this.availableCourses;
    }
    set courses(coursename) {
        this.availableCourses.push(coursename.toString());
    }
    courseDetails() {
        console.log(`Total number of courses ${Courses.totalCourses}`);
        console.log(`The available courses are ${this.availableCourses}`);
    }
}
const courseobj = new Courses('Vivek', 24, 'Male');
courseobj.display();
//setting values for static type variable
Courses.totalCourses = 12;
//setting values for setters
courseobj.courses = ['Maths', 'Physics', 'Comupter science'];
//getting values from the getter
courseobj.courses;
courseobj.courseDetails();
