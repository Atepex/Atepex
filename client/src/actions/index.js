import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, LOGOUT_USER } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
	const res = await axios.post('/api/surveys', values);
	history.push('/surveys');
	dispatch({ type: FETCH_USER, payload: res.data});
};

export const submitContactUs = (values) => async (dispatch) => {
	console.log('submit' + values);
	//const res = await axios.post('/api/contact', values);
	//history.push('/');
	//dispath({ type: FETCH_USER, payload: res.data});
}

export const logoutUser = () => async (dispatch) => {
	console.log("trying to log out");
	const res = await axios.post('/api/logout');
	dispatch({ type: FETCH_USER, payload: res.data });
}