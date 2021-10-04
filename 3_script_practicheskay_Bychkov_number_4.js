'use strict';
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//1 
let products_filtered = products.filter(function (element) {
    return ((element.photos) && (element.photos.length > 0));
});

console.log(products_filtered);


/*
//1
function iterateFn(element) {

    let arr = [];

    if ((element.photos) && (element.photos.length > 0)) {
        arr.push(`${element.id}: ${element.photos}`);
    };

};


alert(products.forEach(iterateFn));
*/

//2
products.sort(function (element_1, element_2) {

    if (element_1.price < element_2.price) {
        return -1;
    } else if (element_1.price < element_2.price) {
        return 1;
    } else {
        return 0;
    }

});

console.log(products);