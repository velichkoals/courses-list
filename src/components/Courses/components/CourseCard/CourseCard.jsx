import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../common/Button/Button';
import { minToHours } from '../../../../heplers/minToHours';

import './CourseCard.css';

export const CourseCard = (props) => {
	const navigate = useNavigate();
	const { info, authors } = props;

	let correctDate = info.creationDate.replace(/(\d*).(\d*).(\d*)/, '$1.$2.$3');
	const splitDate = correctDate.split('.');
	correctDate = splitDate.map((elem) => {
		return elem < 10 ? '0' + elem : elem;
	});
	correctDate = correctDate.join('.');

	const duration = minToHours(info.duration);

	let authorsList = [];
	info.authors.map((elem) => {
		authors.map((e) => {
			if (elem === e.id) {
				authorsList.push(e.name);
			}
			return authors;
		});
		return info;
	});
	authorsList = authorsList.join(', ');

	const handleClick = () => {
		navigate(`${props.id}`, {
			state: { authorsList, duration, correctDate, ...props },
		});
	};

	const buttonText = 'Show course';
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
					<Button text={buttonText} onClick={handleClick} />
				</div>
			</div>
		</div>
	);
};
