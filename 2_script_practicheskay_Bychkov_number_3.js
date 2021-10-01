'use sctrict';
let a = null;
let b = null;


const rand = (param) => {
    param += Math.round(Math.random() * 100 + 1);
    return param;
};


a = rand(a);
b = rand(b);

if ((a > 0) && (b > 0)) {
    alert(a - b);
} else if ((a < 0) && (b < 0)) {
    alert(a * b);
} else if (((a < 0) && (b > 0)) || ((a > 0) && (b < 0))) {
    alert(a + b);
};