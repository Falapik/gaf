// // Function Declaration
// function getName1(name) {
//   return "Имя равно " + name;
// }

// // Function Expression
// const getName2 = function (name) {
//   return "Имя равно " + name;
// };

// // Стрелочная функция
// const getName3 = (name) => "Имя равно " + name;

// console.log(getName1("Анна"));
// console.log(getName2("Петр"));
// console.log(getName3("Мария"));

// // Стрелочная функция
// const getSumOfNumbers = (number, type = "odd") => {
//   let num = 0;
//   for (let i = 0; i <= number; i++) {
//     if (type === "odd" && i % 2 !== 0) {
//       num += i;
//     } else if (type === "even" && i % 2 === 0) {
//       num += i;
//     } else if (type === "") {
//       num += i;
//     }
//   }
//   return num;
// };

// console.log(getSumOfNumbers(25, "odd"));
// console.log(getSumOfNumbers(25, "even"));
// console.log(getSumOfNumbers(25, ""));

// function getDivisionCount(number = 1) {
//   if (number < 0 || !Number.isInteger(number)) {
//     alert("Числа должно быть больше 0 и цельным");
//   }

//   sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(getDivisionCount(12));

// const checkQuastionAnswer = (question, correctAnswer) => {
//   let q1 = prompt(question).trim().toLowerCase();
//   let formattedAnswer = correctAnswer.trim().toLowerCase();
//   if (q1 === formattedAnswer) {
//     alert("Ответ верный");
//     console.log(q1);
//     console.log(formattedAnswer);
//   } else {
//     alert("Ответ не верный");
//     console.log(q1);
//     console.log(formattedAnswer);
//   }
// };
// checkQuastionAnswer("Арбуз - это фрукти или ягода?", "ягода");

function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTestOnErrorSymbol(
  text,
  errorSymbol,
  successCallback = showSuccessMessage,
  errorCallback = showErrorMessage
) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      errorCallback(
        `Найден запрещеный символ ${errorSymbol} под индексом ${i}`
      );
    }
  }
  if (!text.includes(errorSymbol)) {
    successCallback(`Запрещенных знаков нет`);
  }
}

const text = "Я сделал, наверное всё, один раз два";
const errorSymbol = "а";
checkTestOnErrorSymbol(text, errorSymbol);

