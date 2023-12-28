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
