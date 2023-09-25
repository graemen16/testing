import getUserDisplayName from './get-user-display-name.js';

jest.mock('./user-store', () => ({
	UserStore: {
		getUser: jest.fn().mockImplementation((arg) => ({
			FirstName: 'Ondrej',
			LastName: 'Polesny',
		})),
		setUser: jest.fn(),
	},
}));

test('Returns display name', () => {
	expect(getUserDisplayName(1)).toBe('Polesny, Ondrej');
});
