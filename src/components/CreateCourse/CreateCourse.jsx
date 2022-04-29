import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import { minToHours } from '../Courses/components/CourseCard/CourseCard';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseTitle } from './components/CreateCourseTitle/CreateCourseTitle';
import { CreateCourseDescription } from './components/CreateCourseDescription/CreateCourseDescription';
import { CreateCourseDuration } from './components/CreateCourseDuration/CreateCourseDuration';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AuthorsList } from './components/AuthorsList/AuthorsList';
import mockedCoursesList from '../../constants';

import './CreateCourse.css';

const correctDate = () => {
	let today = new Date();
	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1;
	let dd = today.getDate();
	today = dd + '/' + mm + '/' + yyyy;

	return today;
};

export const CreateCourse = (props) => {
	const { addNewCourse } = props;

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [authorName, setAuthorName] = useState('');
	const [authors, setAuthors] = useState(mockedCoursesList[0]);
	const [newAuthors, setNewAuthors] = useState([]);

	const validateForm = () => {
		let isValidDuration = true;
		let isValidTitle = false;
		let isValidDescription = false;
		let isValidAuthors = false;

		if (duration === 0) {
			alert('Duration should be more than 0 minute!');
			isValidDuration = false;
		}
		if (title.length !== 0) {
			isValidTitle = true;
		}
		if (description.length !== 0) {
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

			const course = {
				id: uuidv4(),
				title,
				description,
				creationDate: correctDate(),
				duration,
				authors: authorsList,
			};
			addNewCourse(course, newAuthors);

			setTitle('');
			setDescription('');
			setDuration(0);
			setAuthorName('');
			setNewAuthors([]);
			setAuthors(mockedCoursesList[0]);
		} else {
			alert('Please, fill in all fields');
		}
	};

	const addAuthor = (data) => {
		authors.forEach((elem) => {
			if (elem === data) {
				setNewAuthors([...newAuthors, elem]);
				const correctAuthorsList = authors.filter((e) => data !== e);
				setAuthors(correctAuthorsList);
			}
		});
	};
	const removeAuthor = (data) => {
		newAuthors.forEach((elem) => {
			if (elem === data) {
				setAuthors([...authors, elem]);
				const correctAuthorsList = newAuthors.filter((e) => data !== e);
				setNewAuthors(correctAuthorsList);
			}
		});
	};

	const addAuthorToList = () => {
		if (authorName.length >= 2) {
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
		<div className='create-course'>
			<div className='create__section-wrapper'>
				<div className='create__section'>
					<CreateCourseTitle
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<div className='create__btn'>
						<Button onClick={validateForm} text={buttonCreate} />
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
							<Button onClick={addAuthorToList} text={buttonCreateAuthor} />
						</div>
					</div>
					<CreateCourseDuration
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
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
					addAuthor={(elem) => addAuthor(elem)}
					removeAuthor={(elem) => removeAuthor(elem)}
				/>
			</div>
		</div>
	);
};
