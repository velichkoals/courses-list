import axios from 'axios';
import { getConfig, URL } from '../services';
import { createAuthorAction, getAllAuthorsAction } from './actionCreators';

export const getAllAuthors = () => {
	return (dispatch) => {
		return axios
			.get(`${URL}/authors/all`, getConfig())
			.then((response) => dispatch(getAllAuthorsAction(response.data.result)))
			.catch((response) => response.data);
	};
};

export const createAuthor = (author) => {
	return (dispatch) => {
		return axios
			.post(`${URL}/authors/add`, author, getConfig())
			.then((response) => dispatch(createAuthorAction(response.data.result)))
			.catch((response) => response.data);
	};
};
