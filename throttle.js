/*

  Throttling - Throttling is a technique in JavaScript that limits the rate at which a function can be invoked. 
  It ensures that a particular function is not called more often than a specified time interval, 
  regardless of how many times the function is invoked during that interval. 
  
 */



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

handler() // should execute true
handler() // should execute false

