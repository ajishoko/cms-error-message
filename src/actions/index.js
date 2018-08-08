export const RESPONSE_LOGIN = 'response_login'
export const LIST_MESSAGE = 'list_message'

// LOGIN
export const responseLogin = items => ({
    type: RESPONSE_LOGIN,
    payload: items
  });
  // END LOGIN

// MESSAGE

export const listMessage = items => ({
  type : LIST_MESSAGE,
  payload: items

})
//END MESSAGE