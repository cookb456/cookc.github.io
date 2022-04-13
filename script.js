//'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

//const interface = 'Audio';
//const private = 534;


function logger() {
    console.log("my name is jonas");
}

//calling / running / unvoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {

    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23'); //just like a function


//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//arrow function (no return)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} peice of apples and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));
//--
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//--




const friend1 = 'Mike';
const friend2 = 'steven';
const friend3 = 'peter';

const friends = ['mike', 'steven', 'peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //gets last element in array

friends[2] = 'Jay';
console.log(friends);

//friends = ['bob', 'alice'];//cannot do

const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);







const friends = ['mike', 'steven', 'peter'];
const newLength = friends.push('jay'); //push adds to end of array returns new length
console.log(friends);
console.log(newLength);

friends.unshift('john'); //adds to beginning
console.log(friends);

//remove elements
friends.pop(); //removes last element of array, returns the element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //removes first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob')); //-1 not found

//true/false if in array or not
friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('steven')) {
    console.log("you have a friend named steven");
}






const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['mike', 'peter', 'steven']
];

const jonas = {
    firstName: 'Jonas',
    lastNahbme: 'schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['mike', 'peter', 'steven']
};






const jonas = {
    firstName: 'Jonas',
    lastName: 'schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['mike', 'peter', 'steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey);//wouldnt work

const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log('Wrong request! what do you want to know about jonas? choose between firstName, lastName, age, job, and friends ');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemdtman';

console.log(jonas);

//challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//objects

const jonas = {
    firstName: 'Jonas',
    lastName: 'schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['mike', 'peter', 'steven'],
    hasDriversLicense: true,

    //need an expression here
    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function () {
    //console.log(this);
    //return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age); //then just retrieves the property
//console.log(jonas['calcAge'](1991));

//challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license."

console.log(jonas.getSummary());






//keeps running while condition true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}


const jonas = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['mike', 'peter', 'steven'],
    true
];

//creating an array of types
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //filling type array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]); //adds to end
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


console.log("ONLY STRINGS----------");
//continue and break
for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log("break with number----------");
for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['mike', 'peter', 'steven'],
];

//entering info backwards

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repeition ${rep}`);
    }
}

*/

for (let rep = 1; rep <= 10; rep++) {
    //console.log(`lifting weights repeition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: lifting weights repeition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('loop is about to end...');
}