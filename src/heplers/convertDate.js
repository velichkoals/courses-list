export function convertDate(date) {
	let correctDate = date.replace(/(\d*).(\d*).(\d*)/, '$1.$2.$3');
	const splitDate = correctDate.split('.');
	correctDate = splitDate.map((elem) => {
		return elem < 10 ? '0' + elem : elem;
	});
	return correctDate.join('.');
}
