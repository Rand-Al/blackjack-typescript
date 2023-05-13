import { User } from "../types/user.types";

export function isUserLoggedIn(): boolean {
  const users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");
  return users.some((u) => u.isLoggedIn);
}
