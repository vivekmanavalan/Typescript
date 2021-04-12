class Sports<T> {
    data : T[] = [];

    addItems(item: T){
        this.data.push(item);
    }

    getItems(){
        return [...this.data];
    }

    removeItem(item : T){
        this.data.splice(this.data.indexOf(item),1);
    }
}

const sobj = new Sports<string>();
sobj.addItems('Basketball');
sobj.addItems('Football');
sobj.addItems('Baseball');
console.log(sobj.getItems());

sobj.removeItem('Baseball');
console.log(sobj.getItems());

const sobj1 = new Sports<number>();

sobj1.addItems(1);
sobj1.addItems(2);
sobj1.addItems(3);
console.log(sobj1.getItems());
sobj1.removeItem(2);
console.log(sobj1.getItems());