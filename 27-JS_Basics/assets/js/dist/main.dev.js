"use strict";

// Основи JS
// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// Зроблено!
// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
// Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
function nameAndSurname() {
  var name;
  var surname; // let 1name;
  // let name-;
  // let name.surname;
  // let let;
  // let function;
} // 3. Вкажи всі можливі способи коментування коду;
// Однострочные комментарии начинаются с двойной косой черты //
// Многострочные комментарии начинаются косой чертой со звёздочкой /* и заканчиваются звёздочкой с косой чертой */.
// 4. Які стилі написання імен змінних ти знаєш?
// 
// 5. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;


function userName() {
  var name = prompt('What your name?');
  var rez = 'Hello,' + name;
  alert(rez);
} // 6. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;


function userAgeYear() {
  var ageYear = +prompt('Enter your birth year');
  var rez = 2021 - ageYear;
  alert(rez);
} // 7. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата


function lengthSideSquare() {
  var num = prompt('Enter length side of Square');
  var rez = 4 * num;
  alert(rez);
} // 8. Запитай у користувача радіус кола і виведи площу такої окружності.


function areaCircle() {
  var num = prompt('Enter radius of Circle');
  var amount = 3.14 * (num * num);
  var rez = amount.toFixed(4);
  alert(+rez);
} // 9. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно. V = S / T


function userSpeed() {
  var distanceS = prompt('Enter distance in km between two towns');
  var timeT = prompt('How long do you need for it? Enter time in hours!');
  var amount = distanceS / timeT;
  var rez = amount.toFixed(1);
  alert(+rez + 'km/h');
} // 10. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.


function exchangeRate() {
  var userExchange = parseInt(prompt('Enter amount in dollars'));
  var exchangeInEuro = 0.89;
  var amount = (userExchange * exchangeInEuro).toFixed(2);
  var rez = amount + "\u20AC";
  alert(rez);
}