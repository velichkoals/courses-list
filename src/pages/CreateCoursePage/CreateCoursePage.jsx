import React from 'react';
import { Header } from '../../components/Header/Header';
import { CourseForm } from '../../components/CourseForm/CourseForm';

export const CreateCoursePage = () => {
	return (
		<div>
			<div className='App'>
				<Header />
				<section className='main'>
					<CourseForm />
				</section>
			</div>
		</div>
	);
};
