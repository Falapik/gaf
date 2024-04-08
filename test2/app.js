const x = undefined;
const isTrue = true;
const age = 25;
const name = "John";
const person = { name: "John", age: 25 };
const id = Symbol("33");
const bigNumber = 1234567890123456789012345678901234567890;
const value = null;

let numberTest = 25;
let stringTest = "Test";
let booleanTest = true;

numberTest = 40;
stringTest = "sasdas";
booleanTest = false;

console.log(numberTest);
console.log(stringTest);
console.log(booleanTest);

let ageOfPersonl = 18;
let ageOfPerson2 = "20";

ageOfPerson2 = ageOfPersonl;
console.log(ageOfPerson2);
console.log(typeof ageOfPerson2);

let nameOfAnimall = null;
let nameOfAnimal2 = "Charlie";

nameOfAnimal2 = nameOfAnimall;
console.log(nameOfAnimal2);
console.log(typeof nameOfAnimal2);

let bestProgrammingLanguagel = "JavaScript";
let bestProgrammingLanguage2 = "Java";

bestProgrammingLanguage2 = bestProgrammingLanguagel;
console.log("const неизменяемая!", bestProgrammingLanguage2);
console.log(typeof bestProgrammingLanguage2);

let initialValuel;
let initialValue2 = 0;

initialValue2 = initialValuel;
console.log(initialValue2);
console.log(typeof initialValue2);

let isJavaScriptProgrammerl = true;
let isJavaScriptProgrammer2 = false;

isJavaScriptProgrammer2 = isJavaScriptProgrammerl;
console.log("var использовать - плохо!", isJavaScriptProgrammer2);
console.log(typeof isJavaScriptProgrammer2);

let helloText1 = "Hello!";
let helloText2 = "Привет!";

helloText2 = helloText1;
console.log(helloText2);
console.log(typeof helloText2);
