import React, { useEffect, useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { CreateCourse } from '../CreateCourse/CreateCourse';
import mockedCoursesList from '../../constants';

import './Courses.css';

export const Courses = () => {
	const [data, setData] = useState(mockedCoursesList[1]);
	const [authorsList, setAuthorsList] = useState(mockedCoursesList[0]);
	const [searchResults, setSearchResults] = useState([]);
	const [addCourse, setAddCourse] = useState(false);
	const [authors, setAuthors] = useState(mockedCoursesList[0]);
	const [updateAuthors, setUpdateAuthors] = useState(false);
	const [addedAuthors, setAddedAuthors] = useState([]);

	useEffect(() => {
		const arr = [];
		mockedCoursesList[0].map((elem) => {
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
		setSearchResults(data);
	}, []);

	const handleSearch = (searchQuery) => {
		let res = [];
		data.map((elem) => {
			if (
				elem.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
				searchQuery.toUpperCase() === elem.id.toUpperCase()
			) {
				res.push(elem);
			}
			return data;
		});
		setSearchResults(res);
	};

	const handleClear = () => {
		setSearchResults(data);
	};

	const addNewCourse = (info, authors) => {
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
		setData([...data, info]);
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
						<Button onClick={() => setAddCourse(true)} text={buttonText} />
					</div>
					<div className='courses-list'>
						{searchResults.map((elem, index) => {
							return (
								<CourseCard info={elem} authors={authorsList} key={index} />
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
