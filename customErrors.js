


class customError extends Error{


    constructor(message, errorCode){
        super(message);
        this.name = 'customError';
        this.errorCode = errorCode;
    }

}


function errorCheck(){
    try {
        if(10 != 20){
            throw new customError('arithemetic error', 501);
            
        }
        
    } catch (error) {
        console.log(error)
    }
}