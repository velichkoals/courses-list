import React from 'react';
import { Input } from '../../../../common/Input/Input';

const RegistrationName = (props) => {
	return (
		<div className='registration__item'>
			<div className='label-text'>
				<label htmlFor='title'>Name</label>
			</div>
			<Input {...props} type='text' id='title' placeholder='Enter name' />
		</div>
	);
};

export default RegistrationName;
