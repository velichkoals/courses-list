import axios from 'axios';
const URL = 'http://localhost:4000';

let config = {
	headers: {
		Authorization: localStorage.getItem('token'),
	},
};

export const getUserInfo = () => {
	return (dispatch) => {
		return axios
			.get(`${URL}/users/me`, config)
			.then((response) => dispatch(response.data.result))
			.catch((response) => response.data.result);
	};
};
