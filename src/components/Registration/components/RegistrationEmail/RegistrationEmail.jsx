import React from 'react';
import { FormInput } from '../../../../common/FormInput/FormInput';

import '../../Registration.css';

const RegistrationEmail = (props) => {
	const { errors } = props;
	return (
		<div className='registration__item-wrapper'>
			<div className='registration__item'>
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
			<div className='registration__error'>
				{errors?.email?.message || (
					<div style={{ visibility: 'hidden' }}>err</div>
				)}
			</div>
		</div>
	);
};

export default RegistrationEmail;
