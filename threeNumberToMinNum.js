function threeNumber(num1, num2, num3) {
    let minNumber;
    if ((num1 < num2) && (num1 < num3)) {
        return minNumber = num1
    }
    else if ((num2 < num1) && (num2 < num3)) {
        return minNumber = num2;
    }
    else {
        return minNumber = num3;
    }
}

const number1 = 14;
const number2 = 11;
const number3 = 18;
const output = threeNumber(number1, number2, number3);
console.log('Given number is', number1, number2, number3, ' Minimum Number is:', output);

// let myNum = [12, 3, 19];
// console.log(Math.min.apply(Math, myNum));