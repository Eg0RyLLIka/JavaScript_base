'use sctrict';


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            return arg1 + arg2;

        case "разность":
            return arg1 + arg2;

        case "умножение":
            return arg1 + arg2;

        case "частное":
            return arg1 + arg2;
    }
}

const rand = () => {
    return Math.round(Math.random() * 100 + 1);
};

num_1 = rand();
num_2 = rand();

alert(mathOperation(num_1, num_2, prompt('Введите операцию: ')))