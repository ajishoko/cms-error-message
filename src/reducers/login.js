import { RESPONSE_LOGIN } from '../actions';

export const responseLogin = (state = "LOGIN-TEST", action) =>
{    
    switch(action.type){
        case RESPONSE_LOGIN:
        return action.payload;

    default:
        return state;
   }
}