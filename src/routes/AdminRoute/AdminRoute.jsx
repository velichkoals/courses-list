import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AdminRoute = () => {
	return localStorage.getItem('role') === 'admin' ? (
		<Outlet />
	) : (
		<Navigate to='/courses' />
	);
};
