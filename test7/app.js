// Задание 1
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel() {
  if (peopleWaiting.length > 0) {
    const name = peopleWaiting.shift();
    alert(
      `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  }
}

function leaveQueueWithoutParcel() {
  if (peopleWaiting.length > 0) {
    const name = peopleWaiting.pop();
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
  }
}

for (let i = 0; i < 3; i++) {
  giveParcel();
}

for (let i = 0; i < 5; i++) {
  leaveQueueWithoutParcel();
}
// Задание 2
function getSumOfSequence(number) {
  const sequence = [];
  for (let i = 1; i <= number; i++) {
    sequence.push(i);
  }
  console.log(sequence);
  return sequence[0] + sequence[sequence.length - 1];
}

const result = getSumOfSequence(12);
console.log(result);
// Задание 3
const coffees = ["Latte", "Cappuccino", "Americano"];

function favoriteCoffe() {
  const coffeeName = prompt("Поиск кофе по названию:");
  const index = coffees.findIndex(
    (coffee) => coffeeName.toUpperCase() === coffee.toUpperCase()
  );

  if (index !== -1) {
    alert(
      `Держите ваш любимый кофе ${coffees[index]}. Он ${
        index + 1
      }-й по популярности в нашей кофейне.`
    );
  } else {
    alert("К сожалению, такого вида кофе нет в наличии.");
  }
}

favoriteCoffe();

// Задание 4
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);
coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});
// Задание 5
const clientsEstimations = [];
function askClientToGiveEstimation() {
  let estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");

  if (estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}
const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
).length;
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
).length;

alert(
  `Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`
);
// Задание 6
const numbers = [10, 4, 100, -5, 54, 2];

let sum1 = 0;
for (const num of numbers) {
  sum1 += num ** 3;
}

let sum2 = 0;
numbers.forEach((num) => (sum2 += num ** 3));

const sum3 = numbers.reduce((sum, num) => sum + num ** 3, 0);

let sum4 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum4 += numbers[i] ** 3;
}

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);

//Задание 7
const goals = [8, 1, 1, 3, 2, -1, 5];
const maxGoals = Math.max(...goals);
const maxGoalsIndex = goals.indexOf(maxGoals) + 1;

alert(
  `Самый результативный матч был под номером ${maxGoalsIndex}. В нем было забито ${maxGoals} гол(ов).`
);

const minGoals = Math.min(...goals.filter((goal) => goal >= 0));
const minGoalsIndexes = goals.reduce((indexes, goal, index) => {
  if (goal === minGoals) {
    indexes.push(index + 1);
  }
  return indexes;
}, []);

alert(
  `Самые нерезультативные матчи были под номерами ${minGoalsIndexes.join(
    ", "
  )}. В каждом из них было забито по ${minGoals} мячу(а).`
);

const totalGoals = goals.reduce((total, goal) => {
  if (goal >= 0) {
    total += goal;
  }
  return total;
}, 0);

alert(`Общее количество голов за сезон равно ${totalGoals}.`);

const hasAutomaticLosses = goals.some((goal) => goal < 0);

if (hasAutomaticLosses) {
  alert("Были автоматические поражения: да");
} else {
  alert("Были автоматические поражения: нет");
}

const averageGoals = totalGoals / goals.length;

alert(`Среднее количество голов за матч равно ${averageGoals}.`);

Задание 8
function getMathResult(expression) {
  if (expression.length < 3) {
    return "Ошибка";
  }

  let validExpression = expression.filter((element) => {
    return (
      !isNaN(Number(element)) ||
      element === "+" ||
      element === "-" ||
      element === "*"
    );
  });

  if (validExpression.length !== 3) {
    return "Ошибка";
  }

  let [num1, operator, num2] = validExpression;

  num1 = Number(num1);
  num2 = Number(num2);

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return "Ошибка";
  }
}

//Задание 9
const matrix = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    row.push(j + 1);
  }
  matrix.push(row);
}

console.log(matrix);
