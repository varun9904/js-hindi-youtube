const name = "varun"
const repoCount = 50

// console.log(name + repoCount  + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('varun-vs-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(-7, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString);

const newStringOne = "    varun    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://varun.com/varun%20sharma"


console.log(url.replace('%20', '-'))

console.log(url.includes('varun'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));













