import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATED_ERROR = 'authenticated_error';

const URL = 'http://localhost:8000';

export function signInAction({ username, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/api-token-auth/`, { username, password });

      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');
    } catch(error) {
      dispatch({
        type: AUTHENTICATED_ERROR,
        payload: 'Invalid username or password'
      });
    }
  };
}

export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
