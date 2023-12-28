

/*
    DOM Manipulation methods :
    
    To select elements : 
        1. document.getElementById(id)
            return type : reference to element with specified id
        2. document.getElementByClassName(classname)
            return type : HTMLCollection of elements with given classname.
        3. document.getElementByTagName(tagname)
            return type : HTMLCollection of elements with given classname.
        4. document.querySelector(selector)
            return type : first element that matches the specified CSS selector
        5. document.querySelectorAll(selector)
            return type : NodeList containing all that matches the specified CSS selector
         
    Manipulating Elements:

        1. element.innerHTML: Gets or sets the HTML content of an element.
        2. element.textContent: Gets or sets the text content of an element.
        3. element.setAttribute(name, value): Sets the value of an attribute on the specified element.
        4. element.getAttribute(name): Gets the value of the specified attribute on the element.
        5. element.classList.add(className): Adds a class to an element's list of classes.
        6. element.classList.remove(className): Removes a class from an element's list of classes.
        7. element.appendChild(childElement): Appends a child element to the end of the list of children of a specified parent element.

    Creating and Modifying Elements:

        1.  document.createElement(tagName): Creates a new HTML element with the specified tag name.
        2.  document.createTextNode(text): Creates a new text node with the specified text.
        3.  document.createDocumentFragment(): Creates an empty DocumentFragment node.
        4.  element.cloneNode(deep): Clones a node, optionally including its children.


    Traversing the DOM:

        1.  element.parentNode: Returns the parent node of an element.
        2.  element.childNodes: Returns a live NodeList of child nodes of the given element.
        3.  element.firstChild: Returns the first child node of an element.
        4.  element.lastChild: Returns the last child node of an element.
        5.  element.nextSibling: Returns the next node at the same level as the specified node.
        6.  element.previousSibling: Returns the previous node at the same level as the specified node.


    Event Handling:

        element.addEventListener(event, handler): Attaches an event handler function to an element.
        element.removeEventListener(event, handler): Removes an event handler function from an element.

*/



//addEventListener

function handleClick(){
    console.log('button is clicked')
}

const button = document.getElementById('btn')
button.addEventListener('click', handleClick)

//removeEventListener
button.removeEventListener('click', handleClick)


const container = document.getElementById('container')

const para = document.createElement('p') // create paragraph element

para.textContent('this is my para'); // content of p tag
para.style.color('whitesmoke') // font color
para.style.fontFamily('courier new') // font

container.appendChild(para);
