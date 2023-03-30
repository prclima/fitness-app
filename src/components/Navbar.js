import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            {" "}
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
