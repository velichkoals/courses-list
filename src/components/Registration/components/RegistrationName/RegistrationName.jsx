import React from 'react';
import { FormInput } from '../../../../common/FormInput/FormInput';

import '../../Registration.css';

const RegistrationName = ({ errors, ...props }) => {
	return (
		<div className='registration__item-wrapper'>
			<div className='registration__item'>
				<div className='label-text'>
					<label htmlFor='title'>Name</label>
				</div>
				<FormInput {...props} type='text' id='title' placeholder='Enter name' />
			</div>
			<div className='registration__error'>{errors?.name?.message}</div>
		</div>
	);
};

export default RegistrationName;
