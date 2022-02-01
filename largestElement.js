function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 34, 75, 32, 12];
const oldest = largestElement(ages);
console.log(oldest);

const ages2 = [-12, -54, -34, -75];
const oldest2 = largestElement(ages2);
console.log(oldest2);