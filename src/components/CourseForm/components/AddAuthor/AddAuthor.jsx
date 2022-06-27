import React from 'react';
import { Input } from '../../../../common/Input/Input';

export const AddAuthor = (props) => {
	return (
		<div className='create__input-wrapper'>
			<div className='label-text'>
				<label htmlFor='title'>Author name</label>
			</div>
			<Input
				{...props}
				type='text'
				id='title'
				placeholder='Enter author name'
			/>
		</div>
	);
};
