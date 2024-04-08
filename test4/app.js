const myName = "Коля";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Никита Михайлович";
const reasonText = "хочу стать лучше";
const numberOfMonth = 2;
console.log(
  `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`
);

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
a = myInfoText.replaceAll("JavaScript", "JavaScript".toUpperCase());
myInfoText = a;
console.log(myInfoText);
console.log(myInfoText.length);
let str = myInfoText.length - 1;
console.log(myInfoText[0], myInfoText[str]);

// const userName = prompt("Как вас зовут?");
// const formattedName = userName.trim().toLowerCase();

// const userAge = prompt("Сколько вам лет?");
// const formattedAge = Number(userAge.trim());
// alert(`Вас зовут ${formattedName} и вам ${formattedAge} лет`);

// const userString = prompt("Введите текст для обрезки");
// const formattedString = userString.trim();

// const startSliceIndex = prompt(
//   "Введите индекс, с которого нужно начать обрезку строки"
// );
// const endSliceIndex = prompt(
//   "Введите индекс, с которого нужно закончить обрезку строки"
// );

// a = Number(startSliceIndex);
// b = Number(endSliceIndex);

// result = formattedString.slice(a, b);
// alert(result);

const userText = prompt("Введите любой текст");
const wordFromText = prompt("Введите слово их текста");

formattedText = userText.trim();
formattedWord = wordFromText.trim();

formattedText.replaceAll(formattedWord, "");

indexOfWord = formattedText.indexOf(formattedWord);
console.log(indexOfWord);
