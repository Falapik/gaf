// //Заданий 1

// const users = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 10,
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22,
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 104,
//   },
// ];

// const onlineUser = users.filter((user) => user.status === "online");
// const onlineUserNames = onlineUser.map((user) => user.username).join(",");

// console.log(`Сейчас в онлайн следующие пользователи: ${onlineUserNames}`);

// //Задание 2

// const ordersArr = [4, 2, 1, 3];
// const people = [
//   { id: 1, name: "Максим" },
//   { id: 2, name: "Николай" },
//   { id: 3, name: "Ангелина" },
//   { id: 4, name: "Виталий" },
// ];

// const giveTalonsInOrder = (patients, orders) => {
//   return orders.map((el) => patients.find((patient) => patient.id === el));
// };

// console.log(giveTalonsInOrder(people, ordersArr));

// //Задание 3

// function handleObject(obj, key, action) {
//   if (action === "get") {
//     return obj[key];
//   } else if (action === "add") {
//     obj[key] = "";
//     return obj;
//   } else if (action === "delete") {
//     delete obj[key];
//     return obj;
//   } else {
//     return obj;
//   }
// }

// const student = {
//   name: "Maxim",
//   programmingLanguage: "JavaScript",
// };

// const result = handleObject(student, "programmingLanguage", "add");
// console.log("result", result);

// //Задание 4

// const student = {
//   fullName: "Максим",
//   experienceInMonths: 12,
//   stack: ["HTML", "CSS", "JavaScript", "React"],
// };

// const updatedStudent = giveJobToStudent(student, "веб-разработчик");

// function giveJobToStudent(student, jobName) {
//   student.job = jobName;
//   alert(
//     `Поздравляем! У студента ${student?.fullName} появилась новая работа! Теперь он ${jobName}`
//   );
//   return student;
// }
// console.log(student);

// //Задание 5
// const groceries = {
//   "Orange Juice": {
//     price: 1.5,
//     discount: 10,
//   },
//   Chocolate: {
//     price: 2,
//     discount: 0,
//   },
// };
// function getTotalPriceOfShoppingBag(shoppingBag) {
//   let totalPrice = 0;

//   for (const i of shoppingBag) {
//     const product = i.product;
//     const quantity = i.quantity;

//     if (groceries.hasOwnProperty(product)) {
//       const price = groceries[product].price;
//       const discount = groceries[product].discount;
//       const discountedPrice = price - (price * discount) / 100;
//       const itemTotalPrice = discountedPrice * quantity;
//       totalPrice += itemTotalPrice;
//     }
//   }

//   return totalPrice.toFixed(2);
// }
// const shoppingBag = [
//   { product: "Chocolate", quantity: 3 },
//   { product: "Orange Juice", quantity: 23 },
// ];

// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log("totalPrice", totalPrice);

// //Задание 6
// function startGame(heroPlayer, enemyPlayer) {
//   while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
//     const randomNumber = getRandomNumberInRange(0, 1);
//     if (randomNumber === 0) {
//       heatEnemy(heroPlayer);
//     } else {
//       heatHero(enemyPlayer);
//     }
//   }

//   if (heroPlayer.health > 0) {
//     alert(
//       `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
//     );
//   } else {
//     alert(
//       `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
//     );
//   }
// }

// function heatEnemy(heroPlayer) {
//   heroPlayer.health -= 10;
// }

// function heatHero(enemyPlayer) {
//   enemyPlayer.health -= 10;
// }
// function getRandomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const hero = {
//   name: "Batman",
//   health: 100,
// };

// const enemy = {
//   name: "Joker",
//   health: 100,
// };

// startGame(hero, enemy);

//Задание 8

function getWinner(applicants, winnerObject) {
  const applicantKeys = Object.keys(applicants);
  const randomIndex = getRandomNumberInRange(0, applicantKeys.length);
  const randomKey = applicantKeys[randomIndex];
  const winner = {
    ...winnerObject,
    ...applicants[randomKey],
  };
  return winner;
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
