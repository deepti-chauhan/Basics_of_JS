function performOperation(opeartion) {
  return function (...args) {
    return opeartion(...args)
  }
}

function multiply(...args) {
  let result = 1
  for (const arg of args) {
    result *= arg
  }
  return result
}

function add(...args) {
  let result = 0
  for (const arg in args) {
    result += arg
  }
  return result
}

const multiplier = performOperation(multiply)
console.log(multiplier(5, 2))
