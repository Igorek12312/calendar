import { REGISTRATION_SUCCESS, REGISTRATION_ERROR, AUTHENTICATED,
  UNAUTHENTICATED, AUTHENTICATED_ERROR } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return { ...state, signup: true, error: {} };
    case REGISTRATION_ERROR:
      return { ...state, signup: false, error: { signup: action.payload } };
    case AUTHENTICATED:
      return { ...state, authenticated: true};
    case UNAUTHENTICATED:
      return { ...state, authenticated: false};
    case AUTHENTICATED_ERROR:
      return { ...state, error: action.payload};
  }
  return state;
}
