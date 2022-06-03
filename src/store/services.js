// import { fetchData } from '../heplers/fetchData';

// export async function getAuthors(state) {
// 	const authorsList = await fetchData('GET', '/authors/all');
// 	console.log(authorsList);
// 	if (authorsList.successful) {
// 		authorsList.result.map((author) => {
// 			state.authors.push(author);
// 			return authorsList;
// 		});
// 	}
// }

//  export async function getUser() {
// 	const user = await fetchData('GET', '/users/me');
// 	console.log(user);
// }

// export async function getCourses(state) {
// 	const coursesList = await fetchData('GET', '/courses/all');
//
// 	if (coursesList.successful) {
// 		coursesList.result.map((course) => {
// 			state.courses.push(course);
// 			return coursesList;
// 		});
// 	}
// }
