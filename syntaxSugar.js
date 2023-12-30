/*
    what is synatx sugar?
    
    It is also known as syntatic sugar. It is a programming langugae feature that provides more concise and user-firendly code.
    It dosenot add any feature to the language but make it better syntactically

*/

// arrow functions is syntax sugar on normal functions in JS

//normal function
function foo() {
  console.log('this is foo function.')
}

//arrow function
const bar = () => console.log('this is arrow function')

// template literals
const myName = 'Deepti'
console.log('hello', myName)

// instead try template literals
console.log(`hello my name is ${myName}`)

// similaryly spread array and array destructiring are also syntax sugar.

// async/await is also syntax sugar on promises in JS
// promise in JS
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'data fetched successfully' }
      resolve(data)
    }, 2000)
  })
}

fetchData()
  .then((result) => console.log('success : ', result.message))
  .catch((error) => console.log('error : ', error))

//asyns / await in JS
async function fetchDataWithAsync() {
  try {
    const result = await fetchData()
    console.log(`successful result  : ${result.message}`)
  } catch (error) {
    console.log(`unsuccessful result  : ${error}`)
  }
}

//code using async/await is much cleaner and easy to understand. It also reduces the problem of promise chaining occurs during nested
// then & catchs.

fetchData()
fetchDataWithAsync()
