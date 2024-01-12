/**
 *  polyfill bind : is a self implementation of bind method when default bind is not supported by the browser
 *  fall back for bind method
 */

let obj = {
  firstName: 'Deepti',
  lastname: 'chauhan',
}

let sharedFunc = function (city) {
  console.log(`${this.firstName} ${this.lastname} is an Indian Citizen. She lives in ${city}`)
}

//normal bind method

let bindResult = sharedFunc.bind(obj)

// bindResult()

//self implementation of bind

/**
 *  slice() method is used to extract a portion of an array and returns a new array containing the extracted elements.
 *  The slice() method takes two parameters:
 *     start : required, end : optional
 */

Function.prototype.myBind = function (...args) {
  let currObj = this
  params = args.slice(1)

  return function (...newArgs) {
    currObj.apply(args[0], [...params, ...newArgs])
  }
}


let myBindResult = sharedFunc.myBind(obj, 'Sonipat')
myBindResult()
