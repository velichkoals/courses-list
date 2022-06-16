import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../store/selectors';
import { Button } from '../../common/Button/Button';
import { minToHours } from '../../heplers/minToHours';
import { CreateCourseTitle } from './components/CourseFormTitle/CreateCourseTitle';
import { CreateCourseDescription } from './components/CourseFormDescription/CreateCourseDescription';
import { CreateCourseDuration } from './components/CourseFormDuration/CreateCourseDuration';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AuthorsList } from './components/AuthorsList/AuthorsList';
import { addCourse, updateCourse } from '../../store/courses/thunk';
import { createAuthor, getAllAuthors } from '../../store/authors/thunk';

import './CourseForm.css';

export const CourseForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [authorName, setAuthorName] = useState('');
	const [authorsList, setAuthorsList] = useState([...authors]);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [buttonText, setButtonText] = useState('');

	const params = useParams();
	const courses = useSelector(getCourses);
	const courseId = params.courseId;
	const course = courses.filter((elem) => elem.id === courseId);

	useEffect(() => {
		if (course.length > 0) {
			setButtonText('Update Course');
			setTitle(course[0].title);
			setDescription(course[0].description);
			setDuration(course[0].duration);

			const courseAuthorsList = [];

			authorsList.map((author) => {
				course[0].authors.map((authorId) => {
					if (authorId === author.id) {
						courseAuthorsList.push(author);
					}
					return courseAuthorsList;
				});
				return authorsList;
			});
			setCourseAuthors([...courseAuthors, ...courseAuthorsList]);
		} else {
			setButtonText('Create Course');
		}
	}, []);

	useEffect(() => {
		let updatedAuthorsList = [...authorsList];
		if (courseAuthors.length > 0) {
			authorsList.map((author) => {
				courseAuthors.map((a) => {
					if (a.id === author.id) {
						updatedAuthorsList = updatedAuthorsList.filter(
							(author) => author.id !== a.id
						);
					}
					return courseAuthors;
				});
				return authorsList;
			});
			setAuthorsList([...updatedAuthorsList]);
		} else {
			setAuthorsList([...authors]);
		}
	}, [authors]);

	useEffect(() => {
		dispatch(getAllAuthors());
	}, []);

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
				title,
				description,
				duration,
				authors: authorsList,
			};
			if (buttonText === 'Create Course') {
				dispatch(addCourse(newCourse));
			} else if (buttonText === 'Update Course') {
				dispatch(updateCourse(courseId, newCourse));
			}

			setTitle('');
			setDescription('');
			setDuration(0);
			setAuthorName('');
			setCourseAuthors([]);
			setAuthorsList([...authors]);
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

	const deleteAuthor = (data) => {
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
				name: authorName,
			};
			setCourseAuthors([]);
			dispatch(createAuthor(newAuthor));
			setAuthorName('');
		} else {
			alert('Author name should be at least 2 characters!');
		}
	};

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
						<Button type='submit' text={buttonText} />
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
					deleteAuthor={deleteAuthor}
				/>
			</div>
		</form>
	);
};
