
//closures & currying

/*
    closures - Closures are a powerful concept in JavaScript, and they occur when a function is defined inside 
            another function, allowing the inner function to access the variables of the outer function even after
            the outer function has finished execution.

    currying - Currying is a functional programming technique where a function is transformed into a series of functions,
            each taking a single argument. The result is a chain of partially applied functions that, when combined, 
            produce the final result. 
*/

function outerFunc(outerVal){

    function innerFunc(innerVal){
        return outerVal + innerVal;
    }

    return innerFunc;
}

const closure1 = outerFunc(10)(5);
const closure2 = outerFunc(5)(3);

console.log(`${closure1}`)
console.log(`${closure2}`)

