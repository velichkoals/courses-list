import React from 'react';
import { FormInput } from '../../../../common/FormInput/FormInput';

import '../../Login.css';

const LoginPass = ({ errors, ...props }) => {
	return (
		<div className='login__item-wrapper'>
			<div className='login__item'>
				<div className='label-text'>
					<label htmlFor='password'>Password</label>
				</div>
				<FormInput
					{...props}
					type='password'
					id='password'
					placeholder='Enter password'
				/>
			</div>
			<div className='login__error'>{errors?.password?.message}</div>
		</div>
	);
};

export default LoginPass;
