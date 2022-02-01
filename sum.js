const numbers = [44, 22, 66, 88, 11, 43];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
}
// console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum;
}
const results = arrayTotal([44, 22, 66, 88]);
console.log(results);
