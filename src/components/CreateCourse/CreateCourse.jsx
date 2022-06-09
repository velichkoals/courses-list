import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { minToHours } from '../../heplers/minToHours';
import { correctDate } from '../../heplers/correctDate';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseTitle } from './components/CreateCourseTitle/CreateCourseTitle';
import { CreateCourseDescription } from './components/CreateCourseDescription/CreateCourseDescription';
import { CreateCourseDuration } from './components/CreateCourseDuration/CreateCourseDuration';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AuthorsList } from './components/AuthorsList/AuthorsList';

import './CreateCourse.css';

export const CreateCourse = ({ authors, setAuthors, courses, setCourses }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [authorName, setAuthorName] = useState('');
	const [newAuthors, setNewAuthors] = useState([]);
	const navigate = useNavigate();

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
		if (newAuthors.length !== 0) {
			isValidAuthors = true;
		}

		if (
			isValidTitle &&
			isValidDescription &&
			isValidDuration &&
			isValidAuthors
		) {
			const authorsList = newAuthors.map((elem) => elem.id);

			const newCourse = {
				id: uuidv4(),
				title,
				description,
				creationDate: correctDate(),
				duration,
				authors: authorsList,
			};

			setCourses([...courses, newCourse]);
			setAuthors([...authors, ...newAuthors]);

			setTitle('');
			setDescription('');
			setDuration(0);
			setAuthorName('');
			setNewAuthors([]);
			navigate('/courses');
		} else {
			alert('Please, fill in all fields');
		}
	};

	const addAuthor = (data) => {
		authors.map((elem) => {
			if (elem === data) {
				setNewAuthors([...newAuthors, elem]);
				const correctAuthorsList = authors.filter((e) => data !== e);
				setAuthors(correctAuthorsList);
			}
			return authors;
		});
	};

	const removeAuthor = (data) => {
		newAuthors.map((elem) => {
			if (elem === data) {
				setAuthors([...authors, elem]);
				const correctAuthorsList = newAuthors.filter((e) => data !== e);
				setNewAuthors(correctAuthorsList);
			}
			return newAuthors;
		});
	};

	const addAuthorToList = () => {
		if (authorName.trim().length >= 2) {
			const newAuthor = {
				id: uuidv4(),
				name: authorName,
			};
			setAuthors([...authors, newAuthor]);
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
					authors={authors}
					newAuthors={newAuthors}
					addAuthor={addAuthor}
					removeAuthor={removeAuthor}
				/>
			</div>
		</form>
	);
};
