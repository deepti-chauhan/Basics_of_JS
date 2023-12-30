/*
  debouncing - 
*/

function searchHandler(query) {
  console.log(`your search query : ${query}`)
}

function deboundeFunc(func, delay) {
  let timer
  return function (...args) {
    console.log('timer calling...')
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const deboundeHandler = deboundeFunc(searchHandler, 1000)
deboundeHandler('a')
deboundeHandler('ap')
deboundeHandler('app')
deboundeHandler('appl')
deboundeHandler('apple')
