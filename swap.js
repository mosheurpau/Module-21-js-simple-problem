var frist = 5;
var second = 7;
console.log(frist, second);
// frist approach 
// var temp = frist;
// frist = second;
// second = temp;
// console.log(frist, second);

// destructuring
[frist, second] = [second, frist];
console.log(frist, second);

