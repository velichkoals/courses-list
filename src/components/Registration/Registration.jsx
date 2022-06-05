import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { postData } from '../../heplers/postData';
import RegistrationName from './components/RegistrationName/RegistrationName';
import RegistrationEmail from './components/RegistrationEmail/RegistrationEmail';
import RegistrationPass from './components/RegistrationPass/RegistrationPass';

import './Registration.css';

export const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmailExist, setIsEmailExist] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/courses');
		}
	});

	const formMethods = useForm({ mode: 'onBlur' });
	const {
		formState: { errors },
		handleSubmit,
		reset,
	} = formMethods;

	async function onSubmit() {
		reset();
		setIsEmailExist(false);
		const newUser = {
			name,
			email,
			password,
		};
		const registrationInfo = await postData('/register', newUser);

		if (registrationInfo.successful) {
			navigate('/login');
		}
		if (
			registrationInfo.successful === false &&
			Object.keys(errors).length === 0
		) {
			setIsEmailExist(true);
		}
	}

	const registrationBtn = 'Registration';
	return (
		<FormProvider {...formMethods}>
			<form className='registration' onSubmit={handleSubmit(onSubmit)}>
				<div className='registration__title'>Registration</div>
				<RegistrationName
					errors={errors}
					name={'name'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 2,
							message: 'Field should include min. 2 characters',
						},
					}}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<RegistrationEmail
					errors={errors}
					name={'email'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 5,
							message: 'Field should include min. 5 characters',
						},
						pattern: {
							value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
							message: 'Invalid email address.',
						},
					}}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<RegistrationPass
					errors={errors}
					name={'password'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 6,
							message: 'Field should include min. 6 characters',
						},
					}}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{isEmailExist ? (
					<div className='registration__error registration__error__email'>
						This email is already exist.
					</div>
				) : (
					<div style={{ display: 'none' }}>err</div>
				)}
				<Button type='submit' text={registrationBtn} />
				<div className='login-link'>
					If you have an account you can <Link to='/login'>Login</Link>{' '}
				</div>
			</form>
		</FormProvider>
	);
};
