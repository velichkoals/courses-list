export function getCourseAuthors(courseAuthors, authors) {
	let authorsList = [];
	courseAuthors.map((elem) => {
		authors.map((e) => {
			if (elem === e.id) {
				authorsList.push(e.name);
			}
			return authors;
		});
		return courseAuthors;
	});
	return authorsList.join(', ');
}
