import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { fetchData } from '../../heplers/fetchData';
import LoginEmail from './components/LoginEmail/LoginEmail';
import LoginPass from './components/LoginPass/LoginPass';

import './Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isCorrectData, setIsCorrectData] = useState(false);
	const navigate = useNavigate();
	const formMethods = useForm({ mode: 'onBlur' });

	const {
		formState: { errors },
		handleSubmit,
		reset,
	} = formMethods;

	async function onSubmit() {
		reset();

		const newUser = {
			email,
			password,
		};
		const loginInfo = await fetchData('/login', newUser);

		if (loginInfo.successful) {
			navigate('/courses');
			setIsCorrectData(false);
			localStorage.setItem('token', loginInfo.result);
			localStorage.setItem('username', loginInfo.user.name);
		}
		if (loginInfo.successful === false && Object.keys(errors).length === 0) {
			setIsCorrectData(true);
		}
	}

	const loginBtn = 'Login';
	return (
		<FormProvider {...formMethods}>
			<form className='login' onSubmit={handleSubmit(onSubmit)}>
				<div className='login__title'>Login</div>
				<LoginEmail
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
				<LoginPass
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
				{isCorrectData ? (
					<div className='login__error login__error__email'>
						Couldn't find your account.
					</div>
				) : (
					<div style={{ display: 'none' }}>err</div>
				)}
				<Button text={loginBtn} />
				<div className='login-link'>
					If you not have an account you can{' '}
					<Link to='/register'>Registration</Link>{' '}
				</div>
			</form>
		</FormProvider>
	);
};

export default Login;