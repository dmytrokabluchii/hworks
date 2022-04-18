"use strict";

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
var CART = [{
  name: 'milk',
  qty: 2,
  price: 28,
  total: 56,
  buy: true
}, {
  name: 'bread',
  qty: 1,
  price: 12,
  total: 12,
  buy: false
}, {
  name: 'bear',
  qty: 2,
  price: 25,
  total: 50,
  buy: true
}, {
  name: 'cheese',
  qty: 1,
  price: 190,
  total: 190,
  buy: false
}];
var cartSort = "asc";

function checkAndAddProduct() {
  var name = document.getElementById('prod_name').value,
      qty = document.getElementById('prod_qty').value,
      price = document.getElementById('prod_price').value,
      valid = true;

  if (name == "") {
    valid = false;
  }

  if (qty == "") {
    valid = false;
  } else {
    qty = parseInt(qty);

    if (qty <= 0) {
      valid = false;
    }
  }

  if (price == "") {
    valid = false;
  } else {
    price = parseFloat(price);

    if (price <= 0) {
      valid = false;
    }
  }

  if (valid) {
    addToCart(name, qty, price);
  } else {
    panel.warning('Please fill correct all fields', true);
  }
}

function addToCart(name, qty, price) {
  console.log(name, qty, price);
  var ind = CART.findIndex(function (el) {
    return el.name == name;
  });
  console.log(ind);

  if (ind == -1) {
    CART.push({
      name: name,
      qty: qty,
      price: price,
      total: qty * price,
      buy: false
    });
  } else {
    CART[ind].buy = false;
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
  }

  console.log(CART);
  document.getElementById('prod_name').value = '';
  document.getElementById('prod_qty').value = '1';
  document.getElementById('prod_price').value = '';
  panel.success('Product successfully added', true);
  shoppingList();
}

var productRow = function productRow(item, i) {
  return "\n            <tr>\n                <td>".concat(item.name, "</td>\n                <td class=\"text-center\">\n                ").concat(item.buy ? '<span class="badge bg-success">yes</span>' : '<span class="badge bg-danger">no</span>', "</td>\n                <td class=\"text-end\">").concat(item.price.toFixed(2), "</td>\n                <td class=\"text-center\">").concat(item.qty, "</td>\n                <td class=\"text-end\">").concat(item.total.toFixed(2), "</td>\n                <td class=\"text-end\">\n                ").concat(!item.buy ? "<button class=\"btn btn-success btn-sm\" onclick=\"BuyProduct(".concat(i, ")\">Buy</button>") : '', "\n                <button type=\"button\" class=\"btn btn-danger btn-sm\"onclick=\"deleteFromCart(").concat(i, ")\">Delete</button></td>\n            </tr>\n            ");
};

shoppingList();

function shoppingList() {
  var html = ''; //???

  var total = CART.reduce(function (accumPrice, curItem) {
    return accumPrice + curItem.total;
  }, // 1 параметр
  0); // 2 параметр

  var total_buyed = CART.filter(function (item) {
    return item.buy;
  }).reduce(function (accumPrice, curItem) {
    return accumPrice + curItem.total;
  }, 0);
  var total_notbuyed = CART.filter(function (item) {
    return !item.buy;
  }).reduce(function (accumPrice, curItem) {
    return accumPrice + curItem.total;
  }, 0);

  if (cartSort == 'asc') {
    CART.sort(function (a, b) {
      return a.total - b.total;
    });
  } else {
    CART.sort(function (a, b) {
      return b.total - a.total;
    });
  }

  CART.forEach(function (item, i) {
    html += !item.buy ? productRow(item, i) : '';
  });
  CART.forEach(function (item, i) {
    html += item.buy ? productRow(item, i) : '';
  });
  document.getElementById("cart_list").innerHTML = html;
  document.getElementById("total").innerHTML = total.toFixed(2);
  document.getElementById("total_buyed").innerHTML = total_buyed.toFixed(2);
  document.getElementById("total_notbuyed").innerHTML = total_notbuyed.toFixed(2);
}

function changeSort() {
  cartSort = cartSort == "asc" ? "desc" : "asc";
  shoppingList();
}

var BuyProduct = function BuyProduct(ind) {
  if (typeof CART[ind] !== 'undefined') {
    CART[ind].buy = true;
    shoppingList();
    panel.info('Product succesfully buyed', true);
  } else {
    panel.danger('Not found product for buy', true);
  }
};

var deleteFromCart = function deleteFromCart(ind) {
  // console.log(ind);
  if (typeof CART[ind] !== "undefined") {
    if (confirm("Remove ".concat(CART[ind].name, " from cart?"))) {
      CART.splice(ind, 1);
      shoppingList();
      panel.success('Product successfully removed from cart', true);
    }
  } else {
    panel.danger('Not found product for remove', true);
  }
};

var printBill = function printBill() {
  var html = '';
  var total = 0;

  for (var i = 0; i < CART.length; i++) {
    html += "\n        <li>\n        ".concat(CART[i].name, " ").concat(CART[i].price, " &times; ").concat(CART[i].qty, " = ").concat(CART[i].total, "\n        </li>");
    total += CART[i].total;
  }

  document.getElementById("total_bill").innerHTML = total;
  document.getElementById("bill_wrapper").innerHTML = html;
};