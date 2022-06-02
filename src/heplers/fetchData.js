const URL = 'http://localhost:4000';

export async function fetchData(method, route, newUser) {
	return await fetch(`${URL}${route}`, {
		method: method,
		body: JSON.stringify(newUser),
		headers: {
			'Content-type': 'application/json',
		},
	}).then((response) => response.json());
}
