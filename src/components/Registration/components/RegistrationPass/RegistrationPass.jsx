import React from 'react';
import { Input } from '../../../../common/Input/Input';

const RegistrationPass = (props) => {
	return (
		<div className='registration__item'>
			<div className='label-text'>
				<label htmlFor='password'>Password</label>
			</div>
			<Input
				{...props}
				type='text'
				id='password'
				placeholder='Enter password'
			/>
		</div>
	);
};

export default RegistrationPass;
