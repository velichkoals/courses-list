import React from 'react';
import { Input } from '../../../../common/Input/Input';

export const CreateCourseTitle = (props) => {
	return (
		<div className='title'>
			<div className='label-text'>
				<label htmlFor='title'>Title</label>
			</div>
			<Input {...props} type='text' id='title' placeholder='Enter title' />
		</div>
	);
};
