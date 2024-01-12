/**
 *  bind method in JS - similar to call method with slight diffrence.
 *  in call & apply method we can decide to which obj our function will refer whether inside an obj or not.
 *  but with bind function you call bind a function with that obj and it will return a function to use later whenever requird.
 */

let obj1 = {
  firstName: 'Peter',
  lastName: 'pan',
}

let bindFunc = function (hometown) {
  console.log(
    `my name is ${this.firstName} ${this.lastName} and I live in ${hometown}`
  )
}

const bindFuncResult = bindFunc.bind(obj1, 'New York')

bindFuncResult()
