/* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
    кількість і куплений він чи ні, ціну за одиницю товару, сума. 
    Написати кілька функцій для роботи з таким масивом:
1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, 
    а потім - ті, що вже придбали.
2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
3. Створення списку (не) придбаних продуктів. 
4. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
    в якому продукт, що ми шукаємо, буде відсутнім)
5. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
    необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
    При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
    а кількості товарів стало 2, то сума буде 24.
6. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
7. Підрахунок суми всіх (не) придбаних продуктів.
8. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
    в залежності від параметра функції, який вона приймає)
*/

let CART = [
    {name: 'bread', qty: 1, price: 87.60, total: 87.60, buy:false},
    {name: 'milk', qty: 2, price: 28, total: 56, buy:true},
    {name: 'bear', qty: 2, price: 25, total: 50, buy:true},
    {name: 'cheese', qty: 1, price: 190, total: 190 , buy:false}  
];

let cartSort = "asc";

function checkAndAddProduct(){
    let name = document.getElementById('prod_name').value,
        qty = document.getElementById('prod_qty').value,
        price = document.getElementById('prod_price').value,
        valid = true;

    if(name==""){
        valid = false;
    }
    if(qty==""){
        valid = false;
    }else{
        qty = parseInt(qty);
        if(qty<=0){
            valid = false;
        }
    }

    if(price==""){
        valid = false;
    }else{
        price = parseFloat(price);
        if(price<=0){
            valid = false;
        }
    }

    if(valid){
        addToCart(name, qty, price);
    }else{
        panel.warning('Please fill correct all fields', true);
    }
}

function addToCart(name, qty, price){
    console.log(name, qty, price);
    
    let ind = CART.findIndex(el=>el.name==name);
    console.log(ind);
    if(ind==-1){
        CART.push({
            name:name,
            qty:qty,
            price:price,
            total:qty*price,
            buy: false
        });
    }else{
        CART[ind].buy = false;
        CART[ind].qty += qty;
        CART[ind].total = CART[ind].qty*CART[ind].price;
    }

    console.log(CART);
    document.getElementById('prod_name').value = '';
    document.getElementById('prod_qty').value = '1';
    document.getElementById('prod_price').value = '';
    panel.success('Product successfully added', true);
    shoppingList();
}

const productRow = (item, i) => {
    return `
            <tr>
                <td>${item.name}</td>
                <td class="text-center">
                ${item.buy?'<span class="badge bg-success">yes</span>':'<span class="badge bg-danger">no</span>'}</td>
                <td class="text-end">${item.price.toFixed(2)}</td>
                <td class="text-center">${item.qty}</td>
                <td class="text-end">${item.total.toFixed(2)}</td>
                <td class="text-end">
                ${!item.buy?`<button class="btn btn-success btn-sm" onclick="BuyProduct(${i})">Buy</button>`:''}
                <button type="button" class="btn btn-danger btn-sm"onclick="deleteFromCart(${i})">Delete</button></td>
            </tr>
            `;
} 

shoppingList();
function shoppingList(){
    let html = '';     //???
    let total = CART.reduce(
        (accumPrice, curItem) => {return accumPrice + curItem.total},  // 1 параметр
        0);  // 2 параметр
    let total_buyed = CART.filter(
        (item) =>{
            return item.buy;
        }
    ).reduce(
        (accumPrice, curItem) => {return accumPrice + curItem.total}, 0);

    let total_notbuyed = CART.filter(
        (item) =>{
            return !item.buy;
        }
    ).reduce(
        (accumPrice, curItem) => {return accumPrice + curItem.total}, 0);
        if (cartSort =='asc'){
            CART.sort((a, b) => a.total - b.total);
        }else{
            CART.sort((a, b) => b.total - a.total);
        }
            
    CART.forEach((item, i) => {
        html += !item.buy?productRow(item, i):'';
    });
    CART.forEach((item, i) => {
        html += item.buy?productRow(item, i):'';
    });

    document.getElementById("cart_list").innerHTML = html;
    document.getElementById("total").innerHTML = total.toFixed(2);
    document.getElementById("total_buyed").innerHTML = total_buyed.toFixed(2);   
    document.getElementById("total_notbuyed").innerHTML = total_notbuyed.toFixed(2);           
}

function changeSort(){
    cartSort=(cartSort=="asc")?"desc":"asc";
    shoppingList();
}

const BuyProduct = (ind) => {
    if(typeof CART[ind]!=='undefined'){
        CART[ind].buy = true;
        shoppingList();
        panel.info('Product succesfully buyed', true);
    }else{
        panel.danger('Not found product for buy', true); 
    }
}

const deleteFromCart = (ind)=>{
    // console.log(ind);
    if(typeof CART[ind]!=="undefined"){
        if(confirm(`Remove ${CART[ind].name} from cart?`)){
            CART.splice(ind, 1);
            shoppingList();
            panel.success('Product successfully removed from cart', true);
        }
    }else{
        panel.danger('Not found product for remove', true);
    }
}

const printBill = ()=>{
    let persentOfDiscount = document.getElementById('prod_discount').value;
    let nameOfDiscount = document.getElementById('prod_select').value;
    if(persentOfDiscount==""){
        valid = false;
    }else{
        persentOfDiscount = parseInt(persentOfDiscount);
        if(persentOfDiscount<=0){
            valid = false;
        }
    }
    
    let html = '';
    let total = 0;
    for(let i=0; i<CART.length; i++){
        html += `
        <li>
        ${CART[i].name} ${CART[i].price} &times; ${CART[i].qty} = ${CART[i].total}
        </li>`;
        total += CART[i].total
    } 

    let rezultOfDiscaunt;
    if(nameOfDiscount==="none"){
        rezultOfDiscaunt = total;
    }else if (nameOfDiscount==="persent") {
        rezultOfDiscaunt = total * (1 - persentOfDiscount / 100);
    }else if (nameOfDiscount==="fixed") {
        rezultOfDiscaunt = (total - persentOfDiscount);
    }else{
        rezultOfDiscaunt = 'No discount';
    };

    let countPdv = rezultOfDiscaunt / 1.2;
    const pdv = (rezultOfDiscaunt - countPdv).toFixed(2);
    // Формула округления до сотых
    rezultOfDiscaunt = Math.round(rezultOfDiscaunt*100) / 100;
    
    document.getElementById('prod_select').value = 'none';
    document.getElementById("total_bill").innerHTML = total;
    document.getElementById("bill_wrapper").innerHTML = html;
    document.getElementById("total_bill_with_discount").innerHTML = rezultOfDiscaunt;
    document.getElementById("pdv_bill").innerHTML = pdv;
}




// 7. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
function getAmountWithDiscount() {
  let sum = +prompt("Enter the amount of your purchase");
  // if (isNaN (sum)) {alert ('It is not number'); return}
  let s;
  if (sum < 200) {
    s = "the total of your purchase is: " + sum;
  } else if (sum >= 200 && sum <= 299) {
    s = `the total of your purchase with discount is: ${
      sum * (1 - 3 / 100).toFixed(2)
    }`;
  } else if (sum >= 300 && sum <= 499) {
    s = `the total of your purchase with discount is: ${
      sum * (1 - 5 / 100).toFixed(2)
    }`;
  } else if (sum >= 500) {
    s = `the total of your purchase with discount is: ${
      sum * (1 - 7 / 100).toFixed(2)
    }`; //некоторые цифры выдают такой результат (7899 - 7346.070000000001)
  } else s = "incorrect value";
  alert(s);
}