import React from 'react';
import { Header } from '../../components/Header/Header';
import { CreateCourse } from '../../components/CreateCourse/CreateCourse';

export const CreateCoursePage = (props) => {
	return (
		<div>
			<div className='App'>
				<Header />
				<section className='main'>
					<CreateCourse {...props} />
				</section>
			</div>
		</div>
	);
};
