import { User } from "../types/user.types";

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem("users") ?? "[]");
}
export function setUsers(users: User[]) {
  localStorage.setItem("users", JSON.stringify(users));
}
