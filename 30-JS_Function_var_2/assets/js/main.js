// Домашнє завдання

// 1. Напиши всі можливі варіанти створення функцій.
// Подробнее написано в HTML!
// 1.Function Declaration (Объявление Функции)
// function sayHi() { 
// alert( "Привет" ); 
// }

// 2. Function Expression (Функциональное Выражение)
// let sayHi = function() { 
// alert( "Привет" ); 
// }

// 3. Функции-«колбэки» и анонимные функции
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

// 4. «Стрелочные функции» (arrow functions) =>
// let func = (arg1, arg2, ...argN) => expression;

// 5. Рекурсия ( Это не отдельный вид создания функции)
// Пример функция рекурсивного вычисления факториала:
// function factorial(n) { 
// if ((n === 0) || (n === 1)) return 1; 
// else return (n * factorial(n - 1)); 
// }  



// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function calcArg(argNum) {
    // let argNum = document.getElementById('arguments_number').value;
    // document.getElementById("calcArg").innerHTML ='Result: '+ argNum.length;
    return results_calcArg.innerText = argNum.length; 
}

// Вариант решения с выводом в консоль
// function calcArg() {
//     return arguments.length;
// }
// const argCalculate = calcArg(6,3,4,7,34,999,'Hello')
// console.log(argCalculate);


// 3. Напиши функцію, яка приймає 2 числа і повертає :
//-1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.
function getTwoNumber(numOne, numTwo) {
    // let numOne = parseInt (document.getElementById('first_number').value);
    // let numTwo = parseInt (document.getElementById('second_number').value);
    if (numOne < numTwo) {
        results_getTwoNumber.innerText = -1;
    }else if (numOne > numTwo) {
        results_getTwoNumber.innerText = 1;
    }else if (numOne === numTwo) {
        results_getTwoNumber.innerText = 0; 
    }
    else {
        results_getTwoNumber.innerText = false;
    }
}


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// Факториал определен для целых неотрицательных чисел.(3! 56! 12!)
// Формула факториала: n!=1⋅2⋅3⋅...⋅(n−2)⋅(n−1)⋅n  Пример: 3! = 1*2*3 = 6 или 5! = 1*2*3*4*5 = 120
// Вычисляется факториал по формуле: путем умножения всех чисел от одного до значения самого числа под факториалом. 
function factorial(n){
    if ((+n === 0) || (+n === 1)) return results_factorial.innerText = 1;
    else if (+n >= 20) return results_factorial.innerText = false;
    else return results_factorial.innerText = +n * factorial(+n - 1);
}; 

// Это рабочая функция через console.log
// function factorialFirst(n) { 
//     if ((n === 0) || (n === 1)) return 1; 
//     else return (n * factorialFirst(n - 1)); 
// }
// const rezFactorialFirst = factorialFirst(5);
// console.log(rezFactorialFirst);

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
    if (one >=10 || two >=10 || three >=10) {return results_changeInOneNumber.innerText = false;}
    else {return results_changeInOneNumber.innerText = one*100+two*10+three;}
};

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function changeInOneNumber(one, two, three) {
//     one = 1;
//     two = 4;
//     three = 9;
//     let rez = String(one) + (two) + (three);
//     rez = +rez;
//     console.log(rez);
//     console.log(typeof rez);
//     alert(rez);
// }
// changeInOneNumber();


// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// Для вычисления площади прямоугольника необходимо умножить их друг на друга. S = a × b.
function lengthSideRectangle(length, width) {
    let rezRectangle;
    let rezSquare;
    // if (isNaN(length, width)) {return false;}
    if (length >0 && width >0) {
        rezRectangle = length*width;
        return results_lengthSideRectangle.innerText = rezRectangle;
    }else{
        rezSquare = (length || width) * (length || width);
        return results_lengthSideRectangle.innerText = rezSquare;
    } 
}

// function lengthSideRectangle() {
//     let numOne = prompt('Enter length of rectangle or length side of square');
//     let numTwo = prompt('Enter width side of rectangle');
//     let rezRectangle = numOne*numTwo;
//     let rezSquare = (numOne || numTwo) * 4;
//     if (isNaN(numOne, numTwo)) {
//         alert("It is not number");
//         return;
//     }
//     let rez = (numOne > 0 && numTwo > 0) ? `The space of rectangle =  ${rezRectangle}` : `The space of square =  ${rezSquare}`;
//     alert(rez);
// }


// 7. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// Соверше́нное число́ — натуральное число, равное сумме всех своих собственных делителей (то есть всех положительных делителей,). 
// Например, число 6 равно сумме своих собственных делителей 1 + 2 + 3. PerfectNumber: 6,28,496,8128 etc.
function checkPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num - 1; i++)
        if (num%i === 0){
            sum += i;
        }
        if (num === 0) {return results_checkPerfectNumber.innerText = false;}
        else if (num === sum) {return results_checkPerfectNumber.innerText = true;}
        else {return results_checkPerfectNumber.innerText = false;}
}

// 8. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function findAmountOfPerfectNumbers(rangeStart, rangeEnd) {
    let rez = [];
    for (let i = rangeStart; i<=rangeEnd; i++){
        if(checkPerfectNumber(i)){
            rez.push(i);
        }
    }
    return results_findAmountOfPerfectNumbers.innerText = rez.join(', ');
}

function checkPerfectNumberRange(){
    const rangeStart = parseInt (document.getElementById('perfect_number_in_range_min').value),
    rangeEnd = parseInt (document.getElementById('perfect_number_in_range_max').value),
    rezRange = document.getElementById("results_findAmountOfPerfectNumbers");

    let rez = findAmountOfPerfectNumbers(rangeStart, rangeEnd);
    rezRange.innerText = rez;
}