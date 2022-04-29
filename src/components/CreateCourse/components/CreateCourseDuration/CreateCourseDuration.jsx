import React from 'react';
import { Input } from '../../../../common/Input/Input';

export const CreateCourseDuration = (props) => {
	return (
		<div className='create__item'>
			<div className='item__title'>Duration</div>
			<div className='create__input-wrapper'>
				<div className='label-text'>
					<label htmlFor='duration'>Duration</label>
				</div>
				<Input
					{...props}
					type='number'
					id='duration'
					placeholder='Enter duration in minutes'
				/>
			</div>
		</div>
	);
};
