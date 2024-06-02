/* eslint-disable react/prop-types */
import logo from "../../assets/ferrari-96052_1280.webp";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <Link to={"/"}>
        <div className={style.imgContainer}>
          <img src={logo} alt="logoDriver" />
        </div>
      </Link>
      <div className={style.linkContainer}>
        <Link className={style.linkHome} to={"/home"}>
          Home
        </Link>
        <Link className={style.linkCrear} to={"/about"}>
          About
        </Link>
        <Link className={style.linkCrear} to={"/create"}>
          Create
        </Link>
        
      </div>
      <SearchBar />
     
    </div>
  );
};

export default Navbar;