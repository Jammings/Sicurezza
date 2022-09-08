import * as actions from './auth.actions';

const INITIAL_STATE = {
  user: null,
  error: null,
  isLoading: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch(type) {
    case actions.LOGIN_USER_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.LOGIN_USER_OK: {
      return { ...state, user: payload, isLoading: false, error: null }
    }
    case actions.LOGIN_USER_ERROR: {
      return { ...state, error: payload, isLoading: false, user: false}
    }
    case actions.REGISTER_USER_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.REGISTER_USER_OK: {
      return { ...state, user: payload, isLoading: false, error: null }
    }
    case actions.REGISTER_USER_ERROR: {
      return { ...state, error: payload, isLoading: false, user: false}
    }
    case actions.CHECK_SESSION_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.CHECK_SESSION_OK: {
      return { ...state, user: payload, isLoading: false, error: null }
    }
    case actions.CHECK_SESSION_ERROR: {
      return { ...state, isLoading: false, user: false}
    }
    case actions.LOGOUT_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.LOGOUT_OK: {
      return { ...state, isLoading: false, error: null, user: false }
    }
    case actions.LOGOUT_ERROR: {
      return { ...state, isLoading: false, user: false, error: payload }
    }
    default: 
      return state;
  }

};

export default authReducer;