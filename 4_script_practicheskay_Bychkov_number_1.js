'use strict';


function Value_in_obj(value) {
    if (value == NaN) {
        console.log(`Это не число`);
        this.units = null;
        this.tens = null;
        this.hundreds = null;
    } else if ((value > 999) || (value < 0)) {
        console.log(`Число ${value} было передано вне [0, 999] диапазона`)
        this.units = null;
        this.tens = null;
        this.hundreds = null;
    } else if (Number.isInteger(value)) {
        this.units = value % 10;
        this.tens = (value % 100 - value % 10) / 10;
        this.hundreds = Math.floor(value / 100);
    } else {
        console.log(`Это не целое число`);
        this.units = null;
        this.tens = null;
        this.hundreds = null;

    };
}

let user = parseInt(prompt('Введите целое число в диапазоне [0, 999]: '));

let function_for = new Value_in_obj(user)

console.log(function_for.units);
console.log(function_for.tens);
console.log(function_for.hundreds);