// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
function addOne() {
    let amountNum = (0.1 + 0.2).toFixed(1);
    alert(amountNum);
}  

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
function addTwo() {
    let amountStringAndNumber = +'1' + 2;
    alert(amountStringAndNumber);
}

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
function amountFlesh() {
    let sumFlesh = parseInt(prompt('Enter the amount of your flesh in GB'));
    let rez = Math.floor(sumFlesh * 1000 / 820);
    alert(rez);
}

// 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
function amountMoneyAndPriceChocolate() {
    let sumMoneyInWallet = prompt('Enter the amount of money in your wallet');
    let priceOfChocolate = prompt('Enter the price of one chocolate');
    let rezChocolate = Math.floor(sumMoneyInWallet / priceOfChocolate);
    alert('You can buy ' + rezChocolate + ' chocolate');
    let sumOfChange = sumMoneyInWallet - (rezChocolate * priceOfChocolate);
    let sumOfChangeRound = sumOfChange.toFixed(2);
    let rez = 'You get ' + sumOfChangeRound + ' grivna 0f change';
    alert(rez);
}

// 5. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
function backwardsNumber() {                                             // Думаю можно и проще но ума хватило ток на это решение
    let threeNum = parseInt(prompt('Enter number from 100 to 999'));
    let a = threeNum%10;
    // a = String(a);
    let b = parseInt(threeNum / 10);
    let c = (a * 100 + b)%10;
    c = String(c);
    let d = parseInt(threeNum / 100);
    d = String(d);
    let rez = a+c+d;
    alert(+rez);
}

// 6. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків. 
function depositInBank() {
    let sumDeposit = parseInt(prompt('Enter the amount of your deposit in a Bank'));
    let procentInYear = sumDeposit / 100 * 5;
    let rez = procentInYear / 12 * 2;
    alert(rez.toFixed(2));
}

/* 7. Що повернуть вираження:
 2 && 0 && 3     //ответ: 0, т.к. 2 и 3 это true, а 0 это false(а возвращается в данном случае значение именно с false)

 2 || 0 || 3     //ответ: 2, т.к. 2 это true, операнд останав-ся и возвращает исходное значение этого операнда, 0 это false (а возвращается в данном случае 1-е значение именно с true)

2 && 0 || 3 */   //ответ: 3, т.к. в (2 && 0) вернется 0(т.к. это false), а 0 или 3 - правильный ответ 3(возвращается в данном случае значение именно с true)


// 8) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (Задача со старого списка)
// (из числа 12345 должно получиться число 51234).
function lastNumberToStart(){
    let numOne = parseInt(prompt('Enter the number consist of five digits!'));
    let a = numOne % 10;
    let b = parseInt(numOne / 10);
    alert(a * 10000 + b);
    
}

// 9) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату. (Задача со старого списка)
function wagesInACompany(){
    let sales = prompt('Enter your monthly sales');
    let wages = 250;
    let rez = sales / 10;
    alert(wages + rez);
}
