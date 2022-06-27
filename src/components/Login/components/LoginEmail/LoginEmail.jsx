import React from 'react';
import { FormInput } from '../../../../common/FormInput/FormInput';

import '../../Login.css';

const LoginEmail = ({ errors, ...props }) => {
	return (
		<div className='login__item-wrapper'>
			<div className='login__item'>
				<div className='label-text'>
					<label htmlFor='email'>Email</label>
				</div>
				<FormInput
					{...props}
					type='text'
					id='email'
					placeholder='Enter email'
				/>
			</div>
			<div className='login__error'>{errors?.email?.message}</div>
		</div>
	);
};

export default LoginEmail;
