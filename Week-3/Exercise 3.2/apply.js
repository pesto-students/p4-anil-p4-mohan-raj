// apply method example

var numbers = [5, 20, 71, 8, 7, 12];

var max = Math.max.apply(null, numbers);

console.log(max);

var min = Math.min.apply(null, numbers);
console.log(min);