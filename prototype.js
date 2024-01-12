/**
 * prototype : it is a property in js by which objects can inherit features from one another.
 * Every function in JS has a built-in property called prototype. It is an object which has its own prototype.
 * access it using Function.prototype.
 *
 * Prototype chain :
 * The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
 * The chain ends when we reach a prototype that has null for its own prototype.
 *
 */

//using with construdctor function

function Person(firstName, lastName) {
  ;(this.firstName = firstName), (this.lastName = lastName)
}

Person.prototype.walk = function () {
  console.log(`${this.firstName} walks fast.`)
}

let Person1 = new Person('Deepti', 'Chauhan')
Person1.walk()





