export const minToHours = (min) => {
	let hours = Math.floor(min / 60);
	let minutes = min % 60;
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return `${hours}:${minutes}`;
};
