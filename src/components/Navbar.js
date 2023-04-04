import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../assets/logo2-r.png";

function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className={style.link}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {" "}
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "white" }}
          >
            Exercises
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
