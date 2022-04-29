import React from 'react';
import { Button } from '../../../../common/Button/Button';

import './CourseCard.css';

export const minToHours = (min) => {
	let hours = Math.floor(min / 60);
	let minutes = min % 60;
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return `${hours}:${minutes}`;
};

export const CourseCard = (props) => {
	const { info, authors } = props;

	let correctDate = info.creationDate.replace(/(\d*).(\d*).(\d*)/, '$1.$2.$3');
	const splitDate = correctDate.split('.');
	correctDate = splitDate.map((elem) => {
		return elem < 10 ? '0' + elem : elem;
	});
	correctDate = correctDate.join('.');

	const duration = minToHours(info.duration);

	let authorsList = [];
	info.authors.forEach((elem) => {
		authors.forEach((e) => {
			if (elem === e.id) {
				authorsList.push(e.name);
			}
		});
	});
	authorsList = authorsList.join(', ');

	return (
		<div className='course-card'>
			<div className='card__column card__column_first'>
				<div className='card-title'>{info.title}</div>
				<div className='card-description'>{info.description}</div>
			</div>
			<div className='card__column card__column_second'>
				<div className='card__column__item card-duration'>
					<span className='card-property__title'>Duration:</span>
					{duration} hours
				</div>
				<div className='card__column__item card-authors'>
					<span className='card-property__title'>Authors:</span>
					{authorsList}
				</div>
				<div className='card__column__item card-creationDate'>
					<span className='card-property__title'>Created:</span>
					{correctDate}
				</div>
				<div className='card__column__item card-button'>
					<Button text='Show course' />
				</div>
			</div>
		</div>
	);
};
