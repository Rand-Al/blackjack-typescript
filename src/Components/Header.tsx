import { useGlobalContext } from "../MyGlobalContext";
import { logoutUser } from "../utils/userUtils";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
  };
  return (
    <header className="min-h-header bg-header-black relative">
      <div className="container mx-auto flex items-center">
        <h2 className="text-white text-5xl py-4 grow min-h-header">
          <span>Black</span>
          <span className="bg-white text-black">Jack</span>
        </h2>
        {isLoggedIn ? (
          <button
            className="btn__logout p-1 bg-white rounded hover:scale-105 transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
