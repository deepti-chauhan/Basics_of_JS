// find element in an array in JS

class needleHayStack {
  constructor(inputArray) {
    this.inputArray = inputArray
  }

  usingIndexOf(valueToFind) {
    if (this.inputArray.indexOf(valueToFind) != -1) return true
    else return false
  }

  usingFind(valueToFind) {
    const val = this.inputArray.find((element) => element === valueToFind)

    if (val) return true
    else return false
  }

  usingIncludes(valueToFind) {
    if (this.inputArray.includes(valueToFind)) return true
    else return false
  }
}

const sampleArray = [1, 4, 3, 6, 8, 10]
const newArray = new needleHayStack(sampleArray)

console.time('myTimer')
console.log(newArray.usingIndexOf(3))
console.timeEnd('myTimer')

console.time('myTimer')
console.log(newArray.usingIncludes(3))
console.timeEnd('myTimer')

console.time('myTimer')
console.log(newArray.usingFind(3))
console.timeEnd('myTimer')
