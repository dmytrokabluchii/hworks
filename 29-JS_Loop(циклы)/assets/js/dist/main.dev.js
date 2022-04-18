"use strict";

/* Домашнє завдання

Мінімум

1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), 
передбач можливість введення невірних даних.
2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
5. Запитай у користувача число і виведи всі дільники цього числа.

Норма

6. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
7. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.
8. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
9. Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, 
поки користувач натискає OK.

Максимум

10. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100. І так до тих пір, поки користувач не вибере == N.
11. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
12. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, 
а також високосний рік.


// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), 
передбач можливість введення невірних даних.
 */
function userAge() {
  var age = +prompt('How Old You?');

  if (age > 0 && age < 12) {
    alert('You are child!');
  } else if (age >= 12 && age < 18) {
    alert('You are teenager!');
  } else if (age >= 18 && age < 60) {
    alert('You are adult!');
  } // else if(age>=60)
  else if (age >= 60 && age < 150) {
      alert('You are pensioner!');
    } else {
      alert('incorrect value');
    }
} // 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


function showSymbol() {
  var num = prompt('Enter the number from 0 to 9');
  var s;

  switch (num) {
    case '0':
      s = ')';
      break;

    case '1':
      s = '!';
      break;

    case '2':
      s = '@';
      break;

    case '3':
      s = '#';
      break;

    case '4':
      s = '$';
      break;

    case '5':
      s = '%';
      break;

    case '6':
      s = '^';
      break;

    case '7':
      s = '&';
      break;

    case '8':
      s = '*';
      break;

    case '9':
      s = '(';
      break;

    default:
      s = 'incorrect value';
      break;
  }

  alert(s);
} // 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function findSum() {
  var rangeFirst = +prompt('Enter start range');
  var rangeFinish = +prompt('Enter end range');

  if (isNaN(rangeFirst, rangeFinish)) {
    alert('It is not number');
    return;
  }

  var sum = 0;

  while (rangeFirst <= rangeFinish) {
    sum += rangeFirst;
    rangeFirst++;
  }

  alert(sum);
} // 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function findCommonDivider() {
  var a = +prompt('Enter number');
  var b = +prompt('Enter number more time');
  var rez;

  if (isNaN(a, b)) {
    alert('It is not number');
    return;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  rez = a;
  alert(rez);
} // 5. Запитай у користувача число і виведи всі дільники цього числа.


function getDivider() {
  var numOfUser = +prompt('Enter the number(not big)');

  if (isNaN(numOfUser)) {
    alert('It is not number');
    return;
  }

  var num;
  var rez;

  for (var i = 1; i <= numOfUser; i++) {
    num = numOfUser / i;
    rez = numOfUser + '/' + i + '=' + num;
    alert(rez);
  }
} // 6. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function isPalindrome() {
  var num = prompt('Enter the number consist of five digits!');

  if (isNaN(num)) {
    alert('It is not number');
    return;
  } // Проверка на не число


  if (parseInt(num) != num || num <= 0) {
    alert('It is not natural number');
    return;
  } // Проверка на не натурал.число


  for (var i = 0; i < num.length / 2; i++) {
    // Обходим массив обычным циклом с 2-х сторон (где i это index)
    var numOne = num[i];
    var numLast = num[num.length - 1 - i];

    if (numOne == numLast) {
      continue;
    } else {
      alert('It is not Palindrome');
      return;
    }
  }

  alert('It is Palindrom');
} // 7. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


function getAmountWithDiscount() {
  var sum = +prompt('Enter the amount of your purchase'); // if (isNaN (sum)) {alert ('It is not number'); return}

  var s;

  if (sum < 200) {
    s = 'the total of your purchase is: ' + sum;
  } else if (sum >= 200 && sum <= 299) {
    s = "the total of your purchase with discount is: ".concat(sum * (1 - 3 / 100).toFixed(2));
  } else if (sum >= 300 && sum <= 499) {
    s = "the total of your purchase with discount is: ".concat(sum * (1 - 5 / 100).toFixed(2));
  } else if (sum >= 500) {
    s = "the total of your purchase with discount is: ".concat(sum * (1 - 7 / 100).toFixed(2));
  } else s = 'incorrect value';

  alert(s);
} // 8. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// 9. Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, 
// поки користувач натискає OK.
// 10. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100. І так до тих пір, поки користувач не вибере == N.
// 11. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// 12) Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, 
// а також високосний рік.


var isLeapYear = function isLeapYear(year) {
  return year % 400 == 0 || year % 4 == 0 && year % 100 != 0 ? true : false;
};

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : n;
};

var checkDate = function checkDate(d, m, y) {
  var ret = true;

  if (d >= 1 && d <= 31) {
    if ([4, 6, 9, 11].indexOf(m) != -1 && d > 30) {
      ret = false;
    }

    if (m == 2) {
      if (isLeapYear(y)) {
        if (d > 29) {
          ret = false;
        }
      } else {
        if (d > 28) {
          ret = false;
        }
      }
    }
  } else {
    ret = false;
  }

  return ret;
};

function nextDate() {
  var day_in = +prompt('Enter day');
  var month_in = +prompt('Enter month');
  var year_in = +prompt('Enter year');

  if (checkDate(day_in, month_in, year_in)) {
    var day_out = +day_in + 1;
    month_out = +month_in;
    year_out = +year_in;

    switch (month_in) {
      case 4:
      case 6:
      case 9:
      case 11:
        if (day_out == 31) {
          day_out = 1;
          month_out++;
        }

        break;

      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day_out == 32) {
          day_out = 1;
          month_out++;
        }

        break;

      case 2:
        if (isLeapYear(year_in)) {
          if (day_out == 30) {
            day_out = 1;
            month_out++;
          }
        } else {
          if (day_out == 29) {
            day_out = 1;
            month_out++;
          }
        }

        break;
    }

    if (month_out == 13) {
      day_out = 1;
      month_out = 1;
      year_out++;
    }

    alert("".concat(addZero(day_out), "/").concat(addZero(month_out), "/").concat(year_out));
  } else {
    alert('Invalid date');
  }
} // Дополнительные задачки
// Задача на чет и нечет. (Задача со старого списка)


function foundEvenOrNotEven() {
  var s;

  switch (num) {
    case '2':
    case '4':
    case '6':
    case '8':
      s = 'even';
      break;

    case '1':
    case '3':
    case '5':
    case '7':
    case '9':
      s = 'Not even';
      break;

    default:
      s = 'incorrect value';
      break;
  }

  alert(s);
} // Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. (Задача со старого списка)


function isMatched(num) {
  num = parseInt(prompt('Enter number from 100 to 999'));
  var s, d, e;
  s = parseInt(num / 100);
  d = parseInt(num % 100 / 10);
  e = num % 10;

  if (s == d || s == e || d == e) {
    alert('Match');
  } else if (s != d || s != e || d != e) {
    alert('NOT match');
  } else {
    alert('incorrect value');
  }
} // 4. Запросить у пользователя год и проверить, високосный он или нет.      (Задача со старого списка)
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.   


function setYear() {
  var year = parseInt(prompt('Enter Year'));

  if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert('Is leap Year');
  } else {
    alert('Is not leap Year');
  }
} // Классический цикл задачи с суммой чисел

/* let sum = 0;
for (let i=0; i<=100; i++){
    sum+=i;
}
console.log(sum); */