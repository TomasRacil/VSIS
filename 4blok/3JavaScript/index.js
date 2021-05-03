"use strict";

// First java script code
console.log("Hello World!");
let name = 'Tomas';
console.log(name);

const INTERESTRATE = 1;
//INTERESTRATE=0.3;
console.log(INTERESTRATE);

let age = 24;
let isAproved = true;
let firstName = undefined;
let selectedColor = null;

let person = {
    name: 'Tomas',
    age: 24
};
console.log(person.age);
console.log(person['name']);

let selectedColors = ['red', 'blue', 'yellow'];

console.log(selectedColors[1]);

console.log(selectedColors.length);

function greet(name) {
    console.log('Hello ' + name + '!');
}
greet('John');

function square(number) {
    return number * number
}

console.log(square(2))

var randomNumber0to100 = Math.floor(Math.random() * 101);
console.log(randomNumber0to100);

try {
    INTERESTRATE = 10;
} catch (ex) {
    console.log(ex);
}

var magic = function () {
    return new Date();
};
console.log(magic)

const magic2 = () => new Date();
console.log(magic);

var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
    return function increment(number,value=1){
        return number+value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0)
    };
})();
console.log(sum(1,2,3,4,5,6));

const arr1 = ['JAN','FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    //arr2=arr1
    arr1[0]='potato'
})();
console.log(arr2)

var voxel = {x:3.6,y:7.4, z:6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
console.log(x,y,z);

const {x:a,y:b,z:c}=voxel;
console.log(a,b,c);

const AVG_TEMPERATURES = {
    today:77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

const LOCAL_FORECAST = {
    today: {min : 72, max:83},
    tomorrow: {min: 73.3, max:84.6}
};

function getMaxOfTmrw(forecast){
    const {tomorrow : {max:maxOfTomorrow}}=forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

const [l,m, ,n] = [1,2,3,4,5,6];
console.log(l,m,n);

let u = 8, v=6;
(()=> {
    [u,v] = [v,u]
})();
console.log(u,v);
 
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr]= list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr, source);

const stats = {
    max: 56.78,
    standard_deviation: 4.38,
    median: 34.54,
    node: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function(){
    return function half({max,min}){
        return (max + min)/2.0;
    };
})();
console.log(stats,half(stats))

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting)

const result = {
    success: ["max-length","no-amd","prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist","no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i<arr.length;i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}
const resultDisplayArray=makeList(result.failure);
console.log(resultDisplayArray);

const createPerson = (name,age,gender) => ({name,age,gender});
/*
{
    return{
        name:name,
        age:age,
        gender:gender
    }
};
*/
console.log(createPerson("Zodiac Hasbro", 56, "male"));

const bicycle = {
    gear:2,
    //setGear: function(newGear){
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear)

/*
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
*/
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
Vegetable
const carrot = new Vegetable('carrot');
carrot
console.log(carrot.name);

class Book {
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}

function makeClass2(){
    class Thermostat {
        constructor(temp){
            this._temp = 5/9*(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)

/*
import {capitalizeString} from './toImport.js';
const cap = capitalizeString("hello!");
console.log(cap);
*/
import * as capitalizeString from "./toImport.js";
const cap = capitalizeString.capitalizeString("hello!");
console.log(cap);
console.log(capitalizeString.foo)
