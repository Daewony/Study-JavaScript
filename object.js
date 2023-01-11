
const obj1 = {}; 
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const daewon = {name:'daewon', age: 23};
print(daewon);

daewon.hasJob = false;
console.log(daewon.hasJob);
delete daewon.hasJob;
console.log("-------------------------");

console.log(daewon.name);
console.log(daewon['name']);
daewon['hasJob'] = false;
console.log(daewon.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(daewon,'name')

console.log("-------------------------");

const person1 = {name:'bob', age: 2};
const person2 = {name:'steve', age: 3};
const person3 = {name:'dave', age: 4};
const person4 = new Person('alex',23);
console.log(person4);

function Person(name,age) {
    this.name = name;
    this.age = age;
}

console.log("-------------------------");

console.log('name' in daewon);
console.log('age' in daewon);
console.log('sex' in daewon);
console.log(daewon.sex);

console.log("-------------------------");

console.clear();
for (key in daewon) {
    console.log(key);
}

const array = [1,2,4,5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}

console.log("-------------------------");

const user = {name: 'daewon', age: '23'};
const user2 = user;
user2.name = 'guy';
console.log(user);

const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.clear();
console.log(user3);

const user4 = Object.assign({}, user);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'small'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);