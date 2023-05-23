import { createContext, useContext } from "react";
export type GlobalContent = {
  isAside: boolean;
  setIsAside: (value: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  isAside: false, // set a default value
  setIsAside: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
