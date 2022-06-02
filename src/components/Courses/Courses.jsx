import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { CreateCourse } from '../CreateCourse/CreateCourse';
import { addCourseAction } from '../../store/courses/actionCreators';
import mockedCoursesList from '../../constants';

import './Courses.css';

export const Courses = ({
	searchResults,
	setSearchResults,
	add,
	authors,
	setAuthors,
	authorsList,
	setAuthorsList,
}) => {
	const navigate = useNavigate();
	const [addCourse, setAddCourse] = useState(false);
	const [updateAuthors, setUpdateAuthors] = useState(false);
	const [addedAuthors, setAddedAuthors] = useState([]);

	const dispatch = useDispatch();
	const courses = useSelector((state) => state.courses.courses);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}
	});

	useEffect(() => {
		const arr = [];
		courses.map((elem) => {
			arr.push(elem.name);
			return arr;
		});
		authors.map((elem) => {
			if (!arr.includes(elem.name) && !addedAuthors.includes(elem)) {
				setAddedAuthors([...addedAuthors, elem]);
			}
			return arr;
		});

		if (updateAuthors) {
			setAuthors([...mockedCoursesList[0], ...addedAuthors]);
		}

		setUpdateAuthors(false);
	}, [authors, updateAuthors]);

	useEffect(() => {
		if (add === false) {
			setAddCourse(false);
		}
	}, [add]);

	const handleClick = () => {
		navigate('add');
		setAddCourse(true);
	};

	const handleSearch = (searchQuery) => {
		let res = [];
		courses.map((elem) => {
			if (
				elem.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
				searchQuery.toUpperCase() === elem.id.toUpperCase()
			) {
				res.push(elem);
			}
			return courses;
		});
		setSearchResults(res);
	};

	const handleClear = () => {
		// 	setSearchResults(data);
	};

	const addNewCourse = (info, authors) => {
		dispatch(addCourseAction(info));

		setUpdateAuthors(true);
		let newAuthors = [];
		authors.map((elem) => {
			if (!authorsList.includes(elem)) {
				newAuthors.push(elem);
			}
			return authors;
		});
		setAuthorsList([...authorsList, ...newAuthors]);
		setAddCourse(false);
		setSearchResults([...searchResults, info]);
	};

	const buttonText = 'Add new course';
	return (
		<div className='courses'>
			{addCourse ? (
				<div className='courses-add'>
					<CreateCourse
						addNewCourse={addNewCourse}
						authors={authors}
						setAuthors={setAuthors}
					/>
				</div>
			) : (
				<div>
					<div className='courses-section'>
						<SearchBar handleSearch={handleSearch} handleClear={handleClear} />
						<Button onClick={handleClick} text={buttonText} />
					</div>
					<div className='courses-list'>
						{courses.map((elem, index) => {
							return (
								<CourseCard
									info={elem}
									authors={authorsList}
									key={index}
									id={index + 1}
								/>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
