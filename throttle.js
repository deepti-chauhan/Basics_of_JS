function fire() {
  console.log('FIRE')
}

function throttle(func, interval) {
  let shouldExecute = true
  return function () {
    console.log(`should execute ${shouldExecute}`)
    if (shouldExecute) {
      func()
      shouldExecute = false
      setTimeout(() => {
        shouldExecute = true
      }, interval)
    }
  }
}

const handler = throttle(fire, 100)
console.log(handler)
handler()
handler()
setTimeout(handler, 100)
