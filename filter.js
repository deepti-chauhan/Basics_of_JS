const arrWithDups = [1, 3, 5, 2, 1, 6, 4, 3, 7, 9, 6, 3, 7]

const arrWithoutDups = arrWithDups.filter(
  (currentElement, currentIdx, currentArray) => {
    return currentArray.indexOf(currentElement) === currentIdx
  }
)

console.log(arrWithoutDups)
