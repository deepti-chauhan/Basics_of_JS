
//remove duplicates from your array 

const arr = [1,1,1,3,3,3,2,2,5,6,7]


//using set
const setArray = [...new Set(arr)]

//using filter method



/*
    syntax : 

    array.filter(callbackFunction)

    array.filter((element, index, array) => {
        // logic statements
    })

*/

const filterArray = arr.filter((currentElement, currentElementIndex, currentArray) => {
    return currentArray.indexOf(currentElement) === currentElementIndex;
})


console.log(filterArray)
