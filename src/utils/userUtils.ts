import { User } from '../types/user.types';

export function isUserLoggedIn(): boolean {
  const users: User[] = JSON.parse(localStorage.getItem('users') ?? '[]');
  return users.some((u) => u.isLoggedIn);
}

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem('users') ?? '[]');
}

export function setUsers(users: User[]) {
  localStorage.setItem('users', JSON.stringify(users));
}

export function loginUser(username: string) {
  const users = getUsers();
  if (users.length && users.some((u) => u.username === username)) {
    const existingUser = users.find((u) => u.username === username) as User;
    existingUser.isLoggedIn = true;
  } else {
    const newUser: User = {
      username,
      amount: 10000,
      totalGames: 0,
      winGames: 0,
      loseGames: 0,
      isLoggedIn: true,
    };
    users.push(newUser);
  }
  setUsers(users);
}

export function logoutUser() {
  const users: User[] = JSON.parse(localStorage.getItem('users') ?? '[]');
  if (!users.length) {
    return;
  }
  const user = users.find((u) => u.isLoggedIn);
  if (!user) {
    return;
  }
  user.isLoggedIn = false;
  setUsers(users);
}
