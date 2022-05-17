import React from 'react';
import { Input } from '../../../../common/Input/Input';

const RegistrationEmail = (props) => {
	return (
		<div className='registration__item'>
			<div className='label-text'>
				<label htmlFor='email'>Email</label>
			</div>
			<Input {...props} type='text' id='email' placeholder='Enter email' />
		</div>
	);
};

export default RegistrationEmail;
