import {StatusCodes} from 'http-status-codes'
import customApiError from './customError.js'

class badRequestError extends customApiError{
    constructor(message){
        super(message);
        this.statusCode=StatusCodes.BAD_REQUEST;
    }
}

export default badRequestError;