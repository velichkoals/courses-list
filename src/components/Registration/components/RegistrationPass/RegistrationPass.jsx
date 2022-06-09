import React from 'react';
import { FormInput } from '../../../../common/FormInput/FormInput';

import '../../Registration.css';

const RegistrationPass = ({ errors, ...props }) => {
	return (
		<div className='registration__item-wrapper'>
			<div className='registration__item'>
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
			<div className='registration__error'>{errors?.password?.message}</div>
		</div>
	);
};

export default RegistrationPass;
