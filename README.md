# Basics_of_JS

cover basic and important JS concepts with examples.

## <a id="table-of-contenst"> Table of contents </a>

- [hoisting](#hoisting)
- [scope](#scope)
- [IIFE](#IIFE)
- [Callbacks](#callbacks)
- [Closures](#closures)
- [Promises](#promises)
- [async/await](#async/await)
- [call, apply, bind](#call-apply-bind)
- [ES6 features](#es6-features)
-

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

  - global scope
  - lexcical scope
  - functional scope
  - block scope

**[⬆ Back to Top](#table-of-contents)**

## IIFE

```javascript
(function IIFE(){
  console.log('this is a immediately invoked function')
})()
```

**[⬆ Back to Top](#table-of-contents)**

## callbacks


**[⬆ Back to Top](#table-of-contents)**

## closures

```javascript
function outerFunc() {
  let outerVar = 'i am outer variable'

  function innerFunc() {
    console.log(outerVar)
  }
  return innerFunc
}

const closureFunc = outerFunc()
closureFunc()
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

**[⬆ Back to Top](#table-of-contents)**

## async/await

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
let x = 10
const PI = 3.1415
```

**[⬆ Back to Top](#table-of-contents)**

## arrow functions

Arrow functions provide a concise syntax for writing function expressions.

```javascript
// Traditional function expression
const add = function (a, b) {
  return a + b
}

// Arrow function
const addArrow = (a, b) => a + b
```

**[⬆ Back to Top](#table-of-contents)**

## template literals

```javascript
const name = 'John'
const greeting = `Hello, ${name}!`
```

**[⬆ Back to Top](#table-of-contents)**

## Destructuring

Destructuring enables extracting values from arrays or objects into distinct variables.

```javascript
// Array destructuring
const [first, second] = [1, 2]

// Object destructuring

const myObject = {
  firstName: 'Deepti',
  lastName: 'Chauhan',
}

const { firstName, lastName } = myObject
console.log(`my name is ${firstName} ${lastName}`)
```

<details>
<summary>Output : </summary>
```bash
my name is Deepti Chauhan
```
</details>
