//reduce function in JS
/*
    reduce() method in JS return a single value output. used to apply a function on each element of an array.
    syntax : 
        array.reduce(callbackfunc(accumulator, currentElment, currentElementIdx, array), intitalValue)
*/

const arr = [1, 2, 3, 4, 7, 8, 9, 3]
const sum = arr.reduce((acc, val) => {
  return acc + val
}, 0)

console.log(sum)

//an example to sum out all no.s in an array using reduce() instead of looping over the array. It was introduced in ES6.
