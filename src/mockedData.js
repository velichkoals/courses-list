export const mockedState = {
	user: {
		isAuth: true,
		name: 'Test name',
		email: 'test@email.com',
		role: 'test',
		token: null,
	},
	courses: [
		{
			title: 'React Course',
			description: 'React Ultimate Course 2022 (incl. Hooks, Redux Toolkit)',
			duration: 3322,
			authors: ['5cc91e47-1bf1-43d0-b103-dbda08ff9069'],
			creationDate: '16/06/2022',
			id: 'a9f4fd38-eff0-4385-be12-1f12781a9d62',
		},
	],
	authors: [
		{
			name: 'Alexey Velichko',
			id: 'e022b080-71b6-4ffa-974b-7b513873b4a1',
		},
	],
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
