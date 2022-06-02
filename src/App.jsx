import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import mockedCoursesList from './constants';

import './App.css';

function App() {
	const [searchResults, setSearchResults] = useState(mockedCoursesList[1]);
	const [authors, setAuthors] = useState(mockedCoursesList[0]);
	const [authorsList, setAuthorsList] = useState(mockedCoursesList[0]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route
					path='/courses'
					element={
						<HomePage
							add={false}
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							authors={authors}
							setAuthors={setAuthors}
							authorsList={authorsList}
							setAuthorsList={setAuthorsList}
						/>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<HomePage
							add={true}
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							authors={authors}
							setAuthors={setAuthors}
							authorsList={authorsList}
							setAuthorsList={setAuthorsList}
						/>
					}
				/>
				<Route path='/courses/:courseId' element={<CourseInfo />} />>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
