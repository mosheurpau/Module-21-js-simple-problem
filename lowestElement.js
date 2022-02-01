function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (lowest > element) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [51, 18, 12, 16];
const lowestValue = lowestElement(ages);
console.log(lowestValue);

const ages2 = [-51, -18, -12, -16];
const lowestValue2 = lowestElement(ages2);
console.log(lowestValue2);