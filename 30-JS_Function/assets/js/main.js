// Домашнє завдання
// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
// 3. Напиши функцію, яка приймає 2 числа і повертає :
//                                                    -1, якщо перше число менше, ніж друге; 
//                                                    1 - якщо перше число більше, ніж друге; 
//                                                    0 - якщо числа рівні.
// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// Норма
// 7. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// Соверше́нное число́ (др.-греч. ἀριθμὸς τέλειος) — натуральное число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, 
// отличных от самого́ числа). Например, число 6 равно сумме своих собственных делителей 1 + 2 + 3.
// 8. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.



// 1. Напиши всі можливі варіанти створення функцій.
// Подробнее написано в HTML!
// 1.Function Declaration (Объявление Функции)
// function sayHi() { 
// alert( "Привет" ); 
// }
// // 2. Function Expression (Функциональное Выражение)
// let sayHi = function() { 
// alert( "Привет" ); 
// }
// // 3. Функции-«колбэки» и анонимные функции
// function ask(question, yes, no) { 
// if (confirm(question)) yes() 
// else no();
// } 
// ask("Вы согласны?", function() { 
//     alert("Вы согласились."); 
// }, 
// function() { 
//     alert("Вы отменили выполнение."); 
// });
// // 4. «Стрелочные функции» (arrow functions) =>
// let func = (arg1, arg2, ...argN) => expression;
// // 5. Рекурсия ( Это не отдельный вид создания функции)
// // Пример функция рекурсивного вычисления факториала:
// function factorial(n) { 
// if ((n === 0) || (n === 1)) return 1; 
// else return (n * factorial(n - 1)); 
// }  



// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function calcArg() {
    return arguments.length;
}
const argCalculate = calcArg(6,3,4,7,34,999,'Hello');
console.log(argCalculate);


// 3. Напиши функцію, яка приймає 2 числа і повертає :
//-1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.
function getTwoNumber(numOne, numTwo) {
    if (numOne < numTwo) {
        return -1;
    }else if (numOne > numTwo) {
        return 1;
    }else if (numOne === numTwo) {
        return 0;
    }
    else {
        return false;
    }
}
// const rezGetTwoNumber = getTwoNumber(5, 55);
// console.log(rezGetTwoNumber);


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// Факториал определен для целых неотрицательных чисел.(3! 56! 12!)
// Формула факториала: n!=1⋅2⋅3⋅...⋅(n−2)⋅(n−1)⋅n  Пример: 3! = 1*2*3 = 6 или 5! = 1*2*3*4*5 = 120
// Вычисляется факториал по формуле: путем умножения всех чисел от одного до значения самого числа под факториалом. 
// Вариант(1): функция рекурсивного вычисления
function factorialFirst(n) { 
    if ((n === 0) || (n === 1)) return 1; 
    else return (n * factorialFirst(n - 1)); 
}
const rezFactorialFirst = factorialFirst(5);
console.log(rezFactorialFirst);

// Альтернативный вариант(2) решения циклом: с запросом числа и выводом результата в alert
/* function factorialSecond(){
    let num = parseInt(prompt('Enter positive number from 1 till 20'));
    if (isNaN(num)) {
        alert("It is not number");
        return;
      }
    if(num <= 20){
        let rez = 1, i=1;
        while(i<=num){
            rez *= i;
            i++;
        }
        alert(rez);
    }else{
        alert('Too big number');
    }
} */ 


// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function changeInOneNumber(one, two, three) {
    let rez = String(one) + (two) + (three);
    return rez = +rez;
}
const rezChangeInOneNumber = changeInOneNumber(1,4,9)
console.log(rezChangeInOneNumber);


// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, 
// то вона обчислює площу квадрата. Для вычисления площади прямоугольника необходимо умножить их друг на друга. S = a × b.
function lengthSideRectangle(numOne, numTwo) {
    let rezRectangle = numOne*numTwo;
    let rezSquare = (numOne || numTwo) * (numOne || numTwo);
    if (isNaN(numOne, numTwo)) {
        alert("It is not number");
        return;
    }
    let rez = (numOne > 0 && numTwo > 0) ? `The space of rectangle =  ${rezRectangle}` : `The space of square =  ${rezSquare}`;
    return rez;
}
const rezLengthSideRectangle = lengthSideRectangle(5, 3);
console.log(rezLengthSideRectangle);


// 7. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// Соверше́нное число́ — натуральное число, равное сумме всех своих собственных делителей (то есть всех положительных делителей). 
// Например, число 6 равно сумме своих собственных делителей 1 + 2 + 3. Соверш. числа это: 6, 28, 496, 8128 и тд.
// Вариант решения с запросом числа у пользователя и выводом результата в карточке HTML
function checkPerfectNumber(num2) {
    // !num2(условие) - проверяет получила ли функция данные findAmountOfPerfectNumbers() / усли true то пропускаем parseInt() и выполянеяем num2;
 const num = !num2 ? parseInt(document.getElementById('perfect_number').value): num2;
    if (num === 0) {
        alert(num + ' - not a Perfect Number!')
        // document.getElementById("resultsPerfectNumber").innerHTML = num + ' - not a Perfect Number!';
        return;
    }else if (num > 10000) {
        alert(num + ' - too Big Number!')
        return;
    }
    let sum = 0;
    let residue;
    // перебираем циклом от 1 до заданного числа -1
    for (let i = 1; i < num - 1; i++) {
        residue = num%i;
        if (residue === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        alert(num + ' - is a Perfect Number!')
    }else if (!num2) {
        alert(num + ' - not a Perfect Number!')
    }
}

// упрошенный вариант функции выше с выводом в консоль
function checkPerf(num) {
    let sum = 0;
    let residue;
    for (let i = 1; i < num - 1; i++) {
        residue = num%i;
        if (residue === 0) {
            sum += i;
        }
    }
    if(num === 0) {
        return num + ' - not a Perfect Number!';
        // return false;
    }
    else if (num === sum) {
        console.log(num + ' - is a Perfect Number!');
        // return true;
        // return num + ' - is a Perfect Number!';
    }
    else {
        return num + ' - not a Perfect Number!';
        // return false;
    }
}
const rezCheckPerfectNumber = checkPerf(496);
// console.log(rezCheckPerfectNumber);


// 8. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
// Вариант решения с запросом числа у пользователя и выводом результата в карточке HTML
function findAmountOfPerfectNumbers() {
    const minNumber = parseInt (document.getElementById('perfect_number_in_range_min').value);
    const maxNumber = parseInt (document.getElementById('perfect_number_in_range_max').value);
    for (let i = minNumber; i <= maxNumber; i++) {
        checkPerfectNumber(i);
    }
}

// Вариант функции с выводом в консоль
function findAmountOfPerf(minNumber, maxNumber) {
    for (let i = minNumber; i <= maxNumber; i++) {
        checkPerf(i);
    }
}
const rezFindAmountOfPerf = findAmountOfPerf(4, 940);
// console.log(rezFindAmountOfPerf);











// Задача со старого списка

// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.   (Задача со старого списка)
/* function setYear() {
    let year = parseInt(prompt('Enter Year'));
    if (year%400==0 || (year%4==0 && year%100!=0)){
        alert('Is leap Year'); 
    }else {
        alert('Is not leap Year'); 
    }  
} */




// Вспоминаем функции

// Функция callback - это просто фун-я переданная в качестве параметра другой функции.
function first(y) {
    // console.log(19);
    y();
}
function second() {
    // console.log(2);
}
// В примере выше в консоли мы получим undefined, но дописав ниже first(second); мы получим 19 и 2
first(second);


// Применение CSS стилей в консоли
// console.log('%c Hello', 'color:tomato; font-size:20px; font-weight:bold', 'world');
// console.log( '%c start time', 'color: green', new Date().getTime());

// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

// В терминале программы VS Code мы можем увидеть результат нашего кода написав: 
// node main.js и нажать enter


// Пример чистой функции
function sumOne(a, b){
    return a+b;
}

// Детерминированная функция
/* const a = 2;
function sum(a, b){
    return a+b;
}
console.log(sum(2)); */

// функция приняла 2 параметра(a, b) и вернула их сумму (a+b)
/* function sum(a, b){
    return a+b;
}
console.log(sum(2,4)); */
//  (в любой момент когда мы ее вызовем, она нам вернет 6, в любых условиях когда бы мы ее не вызвали) 
