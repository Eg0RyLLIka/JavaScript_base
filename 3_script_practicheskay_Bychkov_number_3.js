'use strict';
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


function iterateFn(elements) {
    elements.price = elements.price - elements.price * 15 / 100;
};


products.forEach(iterateFn);

function iterateFncheck(elements) {
    alert(elements.price);
};

products.forEach(iterateFncheck);