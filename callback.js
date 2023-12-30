
function callBack() {
  console.log('this is a call back function ');
}


function mainFunc(val , func) {

    if(val > 10){
      return func(); //callback function
    }

    return console.log('this is main function');
}

mainFunc(11, callBack)