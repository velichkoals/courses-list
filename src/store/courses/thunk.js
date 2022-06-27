import axios from 'axios';
import { getConfig, URL } from '../services';
import {
	addAllCoursesAction,
	addCourseAction,
	removeCourseAction,
} from './actionCreators';

export const getAllCourses = () => {
	return (dispatch) => {
		return axios
			.get(`${URL}/courses/all`, getConfig())
			.then((response) => dispatch(addAllCoursesAction(response.data.result)))
			.catch((response) => response.data);
	};
};

export const addCourse = (course) => {
	course.duration = Number(course.duration);
	return (dispatch) => {
		return axios
			.post(`${URL}/courses/add`, course, getConfig())
			.then((response) => dispatch(addCourseAction(response.data.result)))
			.catch((response) => console.log(response));
	};
};

export const updateCourse = (id, course) => {
	course.duration = Number(course.duration);
	return (dispatch) => {
		return axios.put(`${URL}/courses/${id}`, course, getConfig());
	};
};

export const removeCourse = (id) => {
	return async (dispatch) => {
		return await axios
			.delete(`${URL}/courses/${id}`, getConfig())
			.then(() => dispatch(removeCourseAction(id)))
			.catch((response) => response.data);
	};
};
