export const correctDate = () => {
	let today = new Date();
	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1;
	let dd = today.getDate();
	today = dd + '/' + mm + '/' + yyyy;

	return today;
};
