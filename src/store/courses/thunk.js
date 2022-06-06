import axios from 'axios';
import { addAllCoursesAction } from './actionCreators';
const URL = 'http://localhost:4000';

let config = {
	headers: {
		Authorization: localStorage.getItem('token'),
	},
};

export const getAllCourses = () => {
	return (dispatch) => {
		return axios
			.get(`${URL}/courses/all`, config)
			.then((response) => dispatch(addAllCoursesAction(response.data.result)))
			.catch((response) => response.data.result);
	};
};
