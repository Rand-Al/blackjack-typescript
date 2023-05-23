import { Link } from "react-router-dom";
import s from "../assets/css/Aside.module.css";
import { useGlobalContext } from "../MyGlobalContext";
interface AsideProps {
  isAside: boolean;
  setIsAside: (value: boolean) => void;
}
const Aside = (props: AsideProps) => {
  const { isAside, setIsAside } = useGlobalContext();
  return (
    <aside
      className={`${s.aside} ${props.isAside ? s.open : ""} transition-all`}
    >
      <ul className={`${s.list} flex gap-2 flex-col items-start`}>
        <li className="">
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
        <li className="">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li
          className={`${isAside ? s.arrowLeft : s.arrowRight}`}
          onClick={() => setIsAside(!props.isAside)}
        ></li>
      </ul>
    </aside>
  );
};

export default Aside;
