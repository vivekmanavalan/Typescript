"use strict";
class Sports {
    constructor() {
        this.data = [];
    }
    addItems(item) {
        this.data.push(item);
    }
    getItems() {
        return [...this.data];
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
const sobj = new Sports();
sobj.addItems('Basketball');
sobj.addItems('Football');
sobj.addItems('Baseball');
console.log(sobj.getItems());
sobj.removeItem('Baseball');
console.log(sobj.getItems());
const sobj1 = new Sports();
sobj1.addItems(1);
sobj1.addItems(2);
sobj1.addItems(3);
console.log(sobj1.getItems());
sobj1.removeItem(2);
console.log(sobj1.getItems());
