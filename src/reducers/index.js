import { combineReducers } from "redux";
import { responseLogin } from "./login";
import MessagesReducer from './reducer-message';

const rootReducers = combineReducers({
    responseLogin: responseLogin,
    messages: MessagesReducer
  });
  
  export default rootReducers;