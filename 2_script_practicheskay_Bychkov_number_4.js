'use sctrict';


function sum_(slag_1, slag_2) {
    return slag_1 + slag_2;
};


function raz_(umen, vychit) {
    return umen - vychit;
};


function proiz_(mnoj_1, mnoj_2) {
    return mnoj_1 * mnoj_2;
};


function chast_(delim, delit) {
    return delim / delit;
};


const rand = () => {
    return Math.round(Math.random() * 100 + 1);
};

num_1 = rand();
num_2 = rand();
alert(sum_(num_1, num_2));
alert(raz_(num_1, num_2));
alert(proiz_(num_1, num_2));
alert(chast_(num_1, num_2));