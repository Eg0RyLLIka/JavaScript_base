'use strict';

//e5
function Product(name, price) {
    this.name = name;
    this.price = price;
}


Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price) * 0.25;
}

let value = new Product(prompt('Введите название продукта: '), parseInt(prompt('Введите цену: ')));

value.make25PercentDiscount();

console.log(value.price);

//e6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price) * 0.25;
    }

}

let value = new Product(prompt('Введите название продукта: '), parseInt(prompt('Введите цену:')));

value.make25PercentDiscount();

console.log(value.price);