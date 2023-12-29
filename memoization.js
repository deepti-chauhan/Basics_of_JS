
// fibonaci without memoization
function fib(n) {
    
    if (n <= 1) return n
    
    return fib(n - 1) + fib(n - 2)
}

// fibonaci with memoization
function fibMemo(n, cache = {}) {
  if (n <= 1) return n

  if (cache[n]) return cache[n]

  const result = fibMemo(n - 1, cache) + fibMemo(n - 2, cache)
  cache[n] = result
  return result
}

console.time('myTimer')
console.log(fib(5))
console.timeEnd('myTimer')


console.time('myTimer')
console.log(fibMemo(14))
console.timeEnd('myTimer')