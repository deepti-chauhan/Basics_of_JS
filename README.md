# Basics_of_JS

👩‍🏫 A to Z of JS concepts with examples.

## <a id="table-of-contents"> Table of contents(#) </a>

- [Arrays](#Arrays)
- [async/await](#async/await)
- [apply, bind, call](#apply-bind-call)
- [Callbacks](#callbacks)
- [Closures](#closures)
- [Data types](#data-type)
- [ES6 features](#es6-features)
- [hoisting](#hoisting)
- [IIFE](#IIFE)
- [Promises](#promises)
- [scope](#scope)
-

## 📦Arrays

Arrays is a non primitive data type in Javascript to store collection of multiple items under a single variable name.

    var myArray = [1,3,5,7,8]

### ✏️Key Points

- JS arrays are dynamic(resizable)
- can contain items from more than 1 data type.
- JS arrays are 0-indexed.

### ✒️Important Array Methods :

- `length` : return a numerical value i.e. **size of array**
- `push` : **insert** the elements from the **end** into an array
- `pop` : **delete** the **last** element present in the array.
- `shift` : **delete** the **first** element from the array.
- `unshift` : **add** the elements in the array from the **front** side.
- `indexOf` : **find** the **index** of a particular element in an array.
- `splice` : selects the specified number of elements without affecting the original array elements
- `slice` : splice() removes the selected elements from the original array itself.
- `join` : returna a string by concatinating all the elements of Array separated by comma(default) or user defined separator.
- `concat` : concat or basically join two different arrays from end to end.
- `map` : iterates over an array, transforms the array according to user-specified conditions and returns a new array.
- `reduce` : uses a reducer function that reduces the results into a single output.
- `filter` : filter out the contents, as per the user-specified condition, in the form of a new array.
- `reverse` : reverses the order of the elements in an array. overwrites the original array.
- `sort` : sorts the elements of an array in alphabetical order in ascending order.
- `find` : finds out the first value which passes the user-specified conditions
- `forEach` : works as a for loop over an array.
- `includes`: check whether the array contains the specified element or not. return boolean value.

## hoisting

hoisting is a default behavior of JS, meaning the declaration of variables, functions, and classes move to the top of their scope before execution.

<details>
  <summary>
      how does hoisting happen?
  </summary>
  During run time, javascript code is interpreted in a minimum of 2 cycles
  1st phase - completion or compilation.
  2nd phase - execution.
  
  [full article](https://sidhujaspreet963.medium.com/advance-javascript-why-hoisting-3db74309e674)
  
</details>

**[⬆ Back to Top](#table-of-contents)**

## scope

- global scope : default scope for all code running in script mode
- **lexcical scope** : JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.
- functional scope : scope created with a function.
- block scope : scope created with a pair of curly braces

**[⬆ Back to Top](#table-of-contents)**

## IIFE

Immediately invoked functions

```javascript
(function IIFE() {
  console.log("this is a immediately invoked function");
})();
```

**[⬆ Back to Top](#table-of-contents)**

## callbacks

callbacks are functions passed as functions to other functions. Callbacks are executed after certain asycn operation is exected.

➿Callbacks are widely used in async functions.

```javascript
const callback = () => {
  console.log("i am a callback function");
};

const myfunc = (var1, callback) => {
  console.log("inside a function");

  //async operation
  setTimeout(() => {
    console.log("callback function execute after 2seconds");
    callback();
  }, 2000);
};
```

**[⬆ Back to Top](#table-of-contents)**

## closures

Closures are powerful & fundamental concept of JS. A closure is a function bundled together with reference to its surrounding state where it is declared. Thist means that a closure allows a function to access variables from outer scope even after the execution of outer function has finished.

```javascript
function outerFunc() {
  let outerVar = "i am outer variable";

  function innerFunc() {
    console.log(outerVar);
  }
  return innerFunc;
}

const closureFunc = outerFunc();
closureFunc();
```

<details>
  <summary>
  output :
  </summary>
  
  ```javascript
  i am outer variable
  ```
</details>

**[⬆ Back to Top](#table-of-contents)**

## Promises

Promise is an **object** that represents the eventual completion of failure of an async operation.

- promise are more cleaner and structured way to handle async operations.
- solution to callback hell.
- promise has 4 states :
  - `pending` : promise is still pending (neither fullfilled nor rejected).
  - `fulfilled` : action related to promise succeeded.
  - `rejected` : action related to promise rejected.
  - `settled` : Promise has been fulfilled or rejected

```javascript
const newPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("promise resolved");
  } else {
    reject("promise rejected");
  }
});

newPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

`then` method is used to handle the successful fulfillment of the promise, `catch` method is used to handle any errors that occur during the promise execution.

**[⬆ Back to Top](#table-of-contents)**

## async/await

async/await is ES8 feature that simplifies the async operations in JS

**[⬆ Back to Top](#table-of-contents)**

## ES6 features

- [let, const keyword](#let-const-keyword)
- [arrow functions](#arrow-function)
- [template literals](#template-literals)
- [Destructuring](#desturturing)
- [Spread & Rest](#spread-rest)
- [reduce](#reduce)
- [filter](#reduce)
- [map](#reduce)

**[⬆ Back to Top](#table-of-contents)**

## let, const keyword

let and const provide block-scoped variable declarations, replacing the traditional var.

```javascript
let x = 10;
const PI = 3.1415;
```

**[⬆ Back to Top](#table-of-contents)**

## arrow functions

Arrow functions provide a concise syntax for writing function expressions.

```javascript
// Traditional function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;
```

**[⬆ Back to Top](#table-of-contents)**

## template literals

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
```

**[⬆ Back to Top](#table-of-contents)**

## Destructuring

Destructuring enables extracting values from arrays or objects into distinct variables.

```javascript
// Array destructuring
const [first, second] = [1, 2];

// Object destructuring

const myObject = {
  firstName: "Deepti",
  lastName: "Chauhan",
};

const { firstName, lastName } = myObject;
console.log(`my name is ${firstName} ${lastName}`);
```

<details>
  <summary>
    Output : 
  </summary>

```javascript
  my name is Deepti Chauhan
```

</details>
