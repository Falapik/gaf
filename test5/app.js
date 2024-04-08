const user = "the_best_user";
const pass = "123123123";

const existedUserLogin = prompt("Введите свой логин");
const existedUserPassword = prompt("Введите свой пароль");

const formattedUserLogin = existedUserLogin.trim();
const formattedUserPassword = existedUserPassword.trim();

if (formattedUserLogin === user || formattedUserPassword === pass) {
  alert(`Добро пожаловать, ${user}`);
} else {
  alert("Логин или пароль введены неправильно");
}

let score = 0;
let notScore = 0;
const question1 = "Сколько будет 2 + 2? ";
const answer1 = prompt(question1);
if (answer1 === "4") {
  score += 1;
}

const question2 = "Сколько будет 2*2? ";
const answer2 = prompt(question2);
if (answer2.toLowerCase() === "4") {
  score += 1;
} else {
  notScore += 1;
}

const question3 =
  "Что такое У пети было 5 яблок, 3 он съел, 1 отдал другу, сколько у Пети осталось яблок? ";
const answer3 = prompt(question3);
if (answer3.toLowerCase() === "1") {
  score += 1;
} else {
  notScore += 1;
}

const question4 = "4*5? ";
const answer4 = prompt(question4);
if (answer4 === "20") {
  score += 1;
} else {
  notScore += 1;
}

const question5 = "сколько будет 2+2*2? ";
const answer5 = prompt(question5);
if (answer5.toLowerCase() === "6") {
  score += 1;
} else {
  notScore += 1;
}

alert(`Правильных ответов: ${score}\nНеправильных ответов: ${notScore}`);

let a = confirm("Вы челоек?");
if (a === true) {
  alert("Молодцы, это была проверка на работа");
} else {
  alert("Уйди, машина");
}

let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent} !`);
    i += 1;
  }
}

let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}
console.log(sum);

let clientName = "Игорь";
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime >= 500) {
  discount = 30;
} else {
  discount = 0;
}

alert(`Вам предоставляется скидка в ${discount}%!`);
readyDiscount = (clientSpentToday * discount) / 100;
clientSpentToday -= readyDiscount;

clientSpentForAllTime += clientSpentToday;

alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);

let clientName = prompt("Введите имя свое");
let clientSpentForAllTime = +prompt("Сколько вы потратили за все время?");
let clientSpentToday = +prompt("Сколько вы потратили сегодня?");
let discount;

if (
  clientSpentForAllTime < 0 ||
  !Number.isInteger(clientSpentForAllTime) ||
  clientSpentToday < 0 ||
  !Number.isInteger(clientSpentToday)
) {
  alert("Только целое число и только число!!!");
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
  } else if (clientSpentForAllTime >= 500) {
    discount = 30;
  } else {
    discount = 0;
  }

  alert(`Вам предоставляется скидка в ${discount}%!`);
  readyDiscount = (clientSpentToday * discount) / 100;
  clientSpentToday -= readyDiscount;

  clientSpentForAllTime += clientSpentToday;

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  );
}

let password = prompt("Введите пароль");

if (
  password.length >= 3 &&
  password.length <= 20 &&
  /[A-Z]/.test(password) &&
  /\d/.test(password)
) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}
