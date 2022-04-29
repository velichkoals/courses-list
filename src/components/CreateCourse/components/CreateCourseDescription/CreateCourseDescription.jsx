import React from 'react';

export const CreateCourseDescription = (props) => {
	return (
		<div className='create__description'>
			<div className='label-text'>
				<label htmlFor='description'>Description</label>
			</div>
			<textarea
				{...props}
				id='description'
				placeholder='Enter description'
				className='create__textarea'
			/>
		</div>
	);
};
