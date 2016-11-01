import { receiveCurrentUser,
         receiveLogoutSuccess,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
                } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {

  const handleSuccess = user => dispatch(receiveCurrentUser(user));
  const handleError = error => dispatch(receiveErrors(error.responseJSON));
  const handleLogoutSuccess = () => dispatch(receiveLogoutSuccess());

  switch(action.type){
    case LOGIN:
      login(action.user, handleSuccess, handleError);
      break;
    case SIGNUP:
      signup(action.user, handleSuccess, handleError);
      break;
    case LOGOUT:
      logout(handleLogoutSuccess);
      break;
  }

  return next(action);

};
