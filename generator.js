
/*
Generators - special functions that allows you to pause its execution and then resume it whenever required.
yield keyword pause the execution & next() funtion resume the call.

returns iterator object : {value : someValue, done : true/false}
*/

function* fibonacci(limit) {
  let a = 0,
    b = 1
  while (a < limit) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

const fibonacciIterator = fibonacci(5)

for (const fib of fibonacciIterator) {
  console.log(fib)
}
