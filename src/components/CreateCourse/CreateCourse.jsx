import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors } from '../../store/selectors';
import { Button } from '../../common/Button/Button';
import { minToHours } from '../../heplers/minToHours';
import { correctDate } from '../../heplers/correctDate';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseTitle } from './components/CreateCourseTitle/CreateCourseTitle';
import { CreateCourseDescription } from './components/CreateCourseDescription/CreateCourseDescription';
import { CreateCourseDuration } from './components/CreateCourseDuration/CreateCourseDuration';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AuthorsList } from './components/AuthorsList/AuthorsList';
import { addCourseAction } from '../../store/courses/actionCreators';
import { createAuthorAction } from '../../store/authors/actionCreators';

import './CreateCourse.css';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [authorName, setAuthorName] = useState('');
	const [authorsList, setAuthorsList] = useState([...authors]);
	const [courseAuthors, setCourseAuthors] = useState([]);

	useEffect(() => {
		setAuthorsList([...authors]);
	}, [authors]);

	const validateForm = (e) => {
		e.preventDefault();

		let isValidDuration = true;
		let isValidTitle = false;
		let isValidDescription = false;
		let isValidAuthors = false;

		if (duration === 0) {
			alert('Duration should be more than 0 minute!');
			isValidDuration = false;
		}
		if (title.trim().length < 2) {
			alert('Title should be at least 2 characters!');
		}
		if (description.trim().length < 2) {
			alert('Description should be at least 2 characters!');
		}
		if (title.trim().length >= 2) {
			isValidTitle = true;
		}
		if (description.trim().length >= 2) {
			isValidDescription = true;
		}
		if (courseAuthors.length !== 0) {
			isValidAuthors = true;
		}

		if (
			isValidTitle &&
			isValidDescription &&
			isValidDuration &&
			isValidAuthors
		) {
			const authorsList = courseAuthors.map((elem) => elem.id);

			const newCourse = {
				id: uuidv4(),
				title,
				description,
				creationDate: correctDate(),
				duration,
				authors: authorsList,
			};

			dispatch(addCourseAction(newCourse));

			setTitle('');
			setDescription('');
			setDuration(0);
			setAuthorName('');
			setCourseAuthors([]);
			navigate('/courses');
		} else {
			alert('Please, fill in all fields');
		}
	};

	const addAuthor = (data) => {
		authorsList.map((elem) => {
			if (elem === data) {
				setCourseAuthors([...courseAuthors, elem]);
				const correctAuthorsList = authorsList.filter((e) => data !== e);
				setAuthorsList(correctAuthorsList);
			}
			return authors;
		});
	};

	const removeAuthor = (data) => {
		courseAuthors.map((elem) => {
			if (elem === data) {
				setAuthorsList([...authorsList, elem]);
				const correctAuthorsList = courseAuthors.filter((e) => data !== e);
				setCourseAuthors(correctAuthorsList);
			}
			return courseAuthors;
		});
	};

	const addAuthorToList = () => {
		if (authorName.trim().length >= 2) {
			const newAuthor = {
				id: uuidv4(),
				name: authorName,
			};
			setCourseAuthors([]);
			dispatch(createAuthorAction(newAuthor));
			setAuthorName('');
		} else {
			alert('Author name should be at least 2 characters!');
		}
	};

	const buttonCreate = 'Create Course';
	const buttonCreateAuthor = 'Create author';

	return (
		<form onSubmit={validateForm} className='create-course'>
			<div className='create__section-wrapper'>
				<div className='create__section'>
					<CreateCourseTitle
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<div className='create__btn'>
						<Button type='submit' text={buttonCreate} />
					</div>
				</div>
				<CreateCourseDescription
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className='create__section-wrapper main-section'>
				<div className='create__column'>
					<div className='create__item'>
						<div className='item__title'>Add author</div>
						<AddAuthor
							value={authorName}
							onChange={(e) => setAuthorName(e.target.value)}
						/>
						<div className='create__btn'>
							<Button
								onClick={addAuthorToList}
								type='button'
								text={buttonCreateAuthor}
							/>
						</div>
					</div>
					<CreateCourseDuration
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						min='0'
						onInput={(e) => {
							if (e.target.value === '') {
								e.target.value = '';
							}
						}}
					/>
					<div className='create__item item__duration'>
						Duration:{' '}
						<span className='item__duration-time'>{minToHours(duration)}</span>{' '}
						hours
					</div>
				</div>
				<AuthorsList
					authorsList={authorsList}
					courseAuthors={courseAuthors}
					addAuthor={addAuthor}
					removeAuthor={removeAuthor}
				/>
			</div>
		</form>
	);
};
