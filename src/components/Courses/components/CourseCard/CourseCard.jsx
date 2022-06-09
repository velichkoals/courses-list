import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../common/Button/Button';
import { minToHours } from '../../../../heplers/minToHours';
import { convertDate } from '../../../../heplers/convertDate';
import { getCourseAuthors } from '../../../../heplers/getCourseAuthors';

import './CourseCard.css';

export const CourseCard = ({ info, authors, ...props }) => {
	const navigate = useNavigate();

	const correctDate = useMemo(
		() => convertDate(info.creationDate),
		[info.creationDate]
	);
	const duration = useMemo(() => minToHours(info.duration), [info.duration]);
	const courseAuthors = useMemo(
		() => getCourseAuthors(info.authors, authors),
		[info.authors, authors]
	);

	const handleClick = () => {
		navigate(`${props.id}`);
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
					{courseAuthors}
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
