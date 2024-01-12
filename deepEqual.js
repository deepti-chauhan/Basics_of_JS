function deepEquals(object1, object2) {
  if (object1 === object2) {
    return true
  }
  if (
    typeof object1 !== 'object' ||
    typeof object2 !== 'object' ||
    object1 === null ||
    object2 === null
  ) {
    return false
  }

  const objectKey1 = Object.keys(object1)
  const objectKey2 = Object.keys(object2)

  if (objectKey1.length !== objectKey2.length) return false

  for (key of objectKey1) {
    if (!objectKey2.includes(key) || !deepEquals(object1[key], object2[key]))
      return false
  }

  return true
}

const obj1 = { a: 1, b: { y: 2 } }
const obj2 = { a: 1, b: { y: 2 } }

console.log(deepEquals(obj1, obj2))
