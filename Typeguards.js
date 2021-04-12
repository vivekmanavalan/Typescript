"use strict";
const x = {
    name: 'vivek',
    privilages: 'Admin'
};
function display(obj) {
    console.log('Name :', obj.name);
    //this method is used to check if a property is present in the object
    if ('privilages' in obj) {
        console.log('Privilages:', obj.privilages);
    }
}
display(x);
display({ name: 'Tharun' });
