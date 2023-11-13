import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};
export default Layout;
