const business = 450;
const minister = 350;
const army = 600;
// if (business > minister) {
//     console.log('Business max');
// }
// else {
//     console.log('minister is max');
// }

function largeNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const largest = largeNumber(232, 121);
// console.log('Large number is', largest)

// compare 3
/* if (business > minister && business > army) {
    console.log('business man is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister man is bigger');
}
else {
    console.log('army man is bigger');
} */

var max = Math.max(business, minister, army);
// console.log(max);

function findMaxNumber(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    }
    else if (number2 > number1 && number2 > number3) {
        return number2;
    }
    else {
        return number3;
    }
}

const maxNumber = findMaxNumber(333, 55, 511);
// console.log('largest Number', maxNumber);

function findMinNumber(number1, number2, number3) {
    if (number1 < number2 && number1 < number3) {
        return number1;
    }
    else if (number2 < number1 && number2 < number3) {
        return number2;
    }
    else {
        return number3;
    }
}

const minNumber = findMinNumber(33, 55, 11);
console.log('lowest Number', minNumber);
