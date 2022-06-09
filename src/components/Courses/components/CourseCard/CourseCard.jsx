import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../common/Button/Button';
import { minToHours } from '../../../../heplers/minToHours';
import { convertDate } from '../../../../heplers/convertDate';
import { getCourseAuthors } from '../../../../heplers/getCourseAuthors';
import { EditIcon } from './EditIcon/EditIcon';
import { DeleteIcon } from './DeleteIcon/DeleteIcon';
import { removeCourseAction } from '../../../../store/courses/actionCreators';
import { useDispatch } from 'react-redux';

import './CourseCard.css';

export const CourseCard = ({ info, authors, ...props }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const correctDate = useMemo(
		() => convertDate(info.creationDate),
		[info.creationDate]
	);
	const duration = useMemo(() => minToHours(info.duration), [info.duration]);
	const courseAuthors = useMemo(
		() => getCourseAuthors(info.authors, authors),
		[info.authors, authors]
	);

	const showCourse = () => {
		navigate(`${props.id}`);
	};

	const removeCourse = () => {
		dispatch(removeCourseAction(info.id));
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
				<div className='card__column__item card-buttons'>
					<Button text={buttonText} onClick={showCourse} />
					<button className='edit-btn'>
						<EditIcon />
					</button>
					<button className='delete-btn' onClick={removeCourse}>
						<DeleteIcon />
					</button>
				</div>
			</div>
		</div>
	);
};
