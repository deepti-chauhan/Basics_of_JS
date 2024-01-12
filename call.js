/**
 *  call & apply method in JS
 */

let obj1 = {
  firstName: 'John',
  lastName: 'Doe',
}

let obj2 = {
  firstName: 'Jane',
  lastName: 'Dough',
}

let sharedFunc = function (hometown, hobby) {
  console.log(
    `my name is ${this.firstName} ${this.lastName} and i live in ${hometown}. My hobby is ${hobby}`
  )
}

//call method
sharedFunc.call(obj1, 'New York', 'Cooking')


//apply method
sharedFunc.apply(obj2, ['Canada', 'dancing'])


