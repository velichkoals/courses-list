export function getConfig() {
	return {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	};
}
