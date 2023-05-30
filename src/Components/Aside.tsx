import { Link } from "react-router-dom";
import s from "../assets/css/Aside.module.css";
import { useGlobalContext } from "../MyGlobalContext";
const Aside = () => {
  const { isAside, setIsAside } = useGlobalContext();
  return (
    <aside className={`${s.aside} ${isAside ? s.open : ""} transition-all`}>
      <ul className={`${s.list} flex gap-2 flex-col items-start`}>
        <li className="">
          <Link to="/rules" className="hover:underline">
            Rules
          </Link>
        </li>
        <li className="">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li
          className={`${isAside ? s.arrowLeft : s.arrowRight}`}
          onClick={() => setIsAside(!isAside)}
        ></li>
      </ul>
    </aside>
  );
};

export default Aside;
