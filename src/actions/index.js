import axios from 'axios';

export const REGISTRATION_SUCCESS = 'registration_success';
export const REGISTRATION_ERROR = 'registration_error';
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
      // const res2 = await axios.post(`${URL}/api-token-verify/`, res.data.token );
      // console.log(res2);
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

export function signUpAction({username, email, password}, history) {
  return async (dispatch) => {
    try {
      await axios.post(`${URL}/registration/`, { username, email, password });
      // автоматически залогиниться в системе
      // Вывести сообщение об успешной регистрации
      console.log('REGISTRATION_SUCCESS');
      dispatch({ type: REGISTRATION_SUCCESS });

      const res = await axios.post(`${URL}/api-token-auth/`, { username, password });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');

    } catch(error) {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: 'registration failure'
      })
    }
  }
}
