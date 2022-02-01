function arrayMean(array) {
    let newArray = array;
    let sum = 0;
    let mean = 0;
    for (i = 0; i < newArray.length; i++) {
        sum += newArray[i];
    }
    return mean = sum / newArray.length;
}
let myArray = [6, 3, 9];
const output = arrayMean(myArray);
console.log(output);
