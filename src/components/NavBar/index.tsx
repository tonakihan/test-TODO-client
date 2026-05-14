import { type ComponentProps } from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import { FaList, FaInfo } from "react-icons/fa";

// FIXME: mobile - after click close sidebar
function NavBar({ className, ...props }: ComponentProps<"nav">) {
  return (
    <nav {...props} className={[styles.nav, className].join(" ")}>
      <NavLink to="/todo">
        <FaList />
        <span>Todo</span>
      </NavLink>
      <NavLink to="/about">
        <FaInfo />
        <span>About</span>
      </NavLink>
    </nav>
  );
}

export default NavBar;
