const URL = 'http://localhost:4000';

export async function fetchData(route, newUser) {
	return await fetch(`${URL}${route}`, {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-type': 'application/json',
		},
	}).then((response) => response.json());
}
