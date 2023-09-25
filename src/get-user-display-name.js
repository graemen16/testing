import { UserStore } from './user-store';
export default function getUserDisplayName() {
	const user = UserStore.getUser(userId);
	return `${user.LastName}, ${user.FirstName}`;
}
