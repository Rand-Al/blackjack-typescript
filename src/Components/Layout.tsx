import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Aside />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
