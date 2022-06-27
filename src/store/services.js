export const URL = 'http://localhost:4000';

export function getConfig() {
	return {
		headers: {
			Authorization: localStorage.getItem('token'),
			'Content-type': 'application/json',
		},
	};
}
