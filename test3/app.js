let x = undefined;
let isTrue = true;
let age = 25;
let name = "John";
let person = { you: "John", age: 25 };
let id = Symbol("33");
let bigNumber = 1234567890123456789012345678901234567890;
let value = null;

console.log(Number(x), Boolean(x), String(x));
console.log(Number(isTrue), Boolean(isTrue), String(isTrue));
console.log(Number(age), Boolean(age), String(age));
console.log(Number(name), Boolean(name), String(name));
console.log(Number(person), Boolean(person), String(person));
console.log(Boolean(id), String(id));
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
console.log(Number(value), Boolean(value), String(value));

//1
console.log(+"S0"); //неявное
//2
console.log(Number("100")); // явное
//3
console.log("" + 1); //неявное
//4
console.log(String(1)); // явное
//8
console.log(Boolean(0)); // явное
//6
console.log(+"001"); //неявное
//7
console.log(1 + ""); //неявное
//8
console.log(Boolean(1)); //явное
//9
console.log(String(1)); //явное
//10
console.log(Number("Hello World")); //явное

console.log(console.log);
console.log({ name: "Maxim" });
console.log(Symbol(33));
console.log(Number);
console.log("");
console.log(0);
console.log(-10);
console.log("-105");

console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(
  Number({ name: "Maxim" }),
  Boolean({ name: "Maxim" }),
  String({ name: "Maxim" })
);
console.log(Boolean(Symbol(33)), String(Symbol(33)));
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(""), Boolean(""), String(""));
console.log(Number(0), Boolean(0), String(0));
console.log(Number(-10), Boolean(-10), String(-10));
console.log(Number("-105"), Boolean("-105"), String("-105"));

console.log(Number(" 1 2 3 4 5")); //NaN
// 2
console.log(Number("1234 5")); //NaN
// 3
console.log(Number("12345")); // 12345
// 4
console.log(String(false)); // "false"
//5
console.log(Boolean(0000000)); // false
// 6
console.log(Boolean(0.0000001)); // true
//7
console.log(String(undefined)); // "undefined"
// 8
console.log(Number("100f")); // NaN
//9
console.log(Number("100")); // 100
// 10
console.log(Number("000001")); // 1
