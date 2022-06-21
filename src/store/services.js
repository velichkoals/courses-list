import { fetchData } from '../heplers/fetchData';

export async function getAllCourses() {
	return await fetchData('GET', '/courses/all');
}

export async function getAllAuthors() {
	return await fetchData('GET', '/authors/all');
}
