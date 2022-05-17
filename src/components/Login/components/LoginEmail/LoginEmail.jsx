import React from 'react';
import { Input } from '../../../../common/Input/Input';

const LoginEmail = (props) => {
	return (
		<div className='login__item'>
			<div className='label-text'>
				<label htmlFor='email'>Email</label>
			</div>
			<Input {...props} type='text' id='email' placeholder='Enter email' />
		</div>
	);
};

export default LoginEmail;
