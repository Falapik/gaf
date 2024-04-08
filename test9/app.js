// //Задание 1
// const addZero = (numberStr) =>
//   String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

// const getDateFormat = (date, separator = ".") => {
//   const dateItem = date.getDate();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
//   console.log("dateArray", dateArray);

//   return dateArray.join(separator);
// };

// console.log(getDateFormat(new Date()));

// //Задание 2
// function getDaysBeforeBirthday(nextBirthdayDate) {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const nextBirthday = new Date(
//     currentYear,
//     nextBirthdayDate.getMonth(),
//     nextBirthdayDate.getDate()
//   );

//   if (nextBirthday < currentDate) {
//     nextBirthday.setFullYear(currentYear + 1);
//   }

//   const timeDiff = nextBirthday.getTime() - currentDate.getTime();
//   const daysDiff = convertMsToDays(timeDiff);

//   return daysDiff;
// }

// function convertMsToDays(milliseconds) {
//   const millisecondsInDay = 24 * 60 * 60 * 1000;
//   const days = Math.round(milliseconds / millisecondsInDay);

//   return days;
// }

// const myNextBirthday = new Date(2024, 3, 28);
// const daysBeforeMyBirthday = getDaysBeforeBirthday(myNextBirthday);

// console.log(`До моего дня рождения осталось ${daysBeforeMyBirthday} дней.`);

// //Задание 3
// function addDays(date, days = 1) {
//   const millisecondsPerDay = 24 * 60 * 60 * 1000;
//   const timestamp = date.getTime();
//   const newTimestamp = timestamp + days * millisecondsPerDay;
//   const newDate = new Date(newTimestamp);
//   return newDate;
// }
// const currentDate = new Date();
// const newDate = addDays(currentDate, 0);
// console.log(newDate);

//Здание 4
function allowVisa(people) {
  const currentDate = new Date();
  return people.filter((person) => {
    const passportExpirationDate = new Date(person.passportExpiration);
    return currentDate < passportExpirationDate && !person.criminalRecord;
  });
}

const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2023",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2025",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2022",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2021",
  },
];

const result = allowVisa(peopleWithVisa);
console.log("result", result);
