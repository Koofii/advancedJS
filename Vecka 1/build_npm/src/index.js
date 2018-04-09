import inc from './increment';
console.log(inc(2));

const dec = require('./decrement');
console.log(dec(3));


let arr1 = ["wow", "xD"];
let arr2 = ["haaha", "lul"]
let [...arr3] = arr1;
console.log(arr3)

let c = [...arr1, ...arr2];
console.log(c);


class SomeClass {
    state = {name: 'Kuuuuuuuf'};
    print(){
        const {name} = this.state;
        console.log(`My name is ${name}`);
    }
}
const myInstance = new SomeClass();
myInstance.print();