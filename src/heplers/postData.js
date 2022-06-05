import axios from 'axios';

const URL = 'http://localhost:4000';

export async function postData(route, newUser) {
	return axios
		.post(`${URL}${route}`, newUser)
		.then((response) => response.data)
		.catch((response) => response.response.data);
}
