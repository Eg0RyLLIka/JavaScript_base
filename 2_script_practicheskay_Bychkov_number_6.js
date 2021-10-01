'use sctrict';


function right_version(rubles) {
    if (rubles % 10 == 1) {
        return "рубль"
    } else if ((rubles % 10 == 2) || (rubles % 10 == 3) || (rubles % 10 == 4)) {
        return "рубля"
    } else {
        return "рублей"
    }
}


let value = parseInt(prompt('Введите сумму, которую вы хотите положить на счет в банке'));
alert(`Ваша сумма в ${value} ${right_version(value)} успешно зачислена.`);

/*
    switch (rubles) {
        case (rubles % 10 == 1):
            return "рубль";

        case (rubles % 10 == 0 || rubles % 10 == (5 || 6 || 7 || 8 || 9)):
            return "рублей";

        case (rubles % 10 == (2 || 3 || 4)):
            return "рубля";
    }
*/