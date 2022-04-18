// Основи JS

// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// Зроблено!

// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
// Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
function nameAndSurname (){
    let name;
    let surname;
    // let 1name;
    // let name-;
    // let name.surname;
    // let let;
    // let function;
}

// 3. Вкажи всі можливі способи коментування коду;
// Однострочные комментарии начинаются с двойной косой черты //
// Многострочные комментарии начинаются косой чертой со звёздочкой /* и заканчиваются звёздочкой с косой чертой */.


// 4. Які стилі написання імен змінних ти знаєш?
// 


// 5. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
function userName() {
    let name = prompt('What your name?');
    let rez = 'Hello,' + name;
    alert(rez);
}

// 6. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
function userAgeYear() {
    const ageYear = +prompt('Enter your birth year');
    let rez = 2021 - ageYear;
    alert(rez);
}

// 7. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
function lengthSideSquare() {
    let num = prompt('Enter length side of Square');
    let rez = 4*num;
    alert(rez);
}

// 8. Запитай у користувача радіус кола і виведи площу такої окружності.
function areaCircle() {
    let num = prompt('Enter radius of Circle');
    let amount = 3.14*(num*num);
    let rez = amount.toFixed(4);
    alert(+rez);
}

// 9. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно. V = S / T
function userSpeed() {
    let distanceS = prompt('Enter distance in km between two towns');
    let timeT = prompt('How long do you need for it? Enter time in hours!');
    let amount = distanceS / timeT;
    let rez = amount.toFixed(1);
    alert(+rez + 'km/h');
}

// 10. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
function exchangeRate() {
    let userExchange = parseInt(prompt('Enter amount in dollars'));
    const exchangeInEuro = 0.89;
    let amount = (userExchange * exchangeInEuro).toFixed(2);
    let rez = amount + '\u20ac';
    alert(rez);
}