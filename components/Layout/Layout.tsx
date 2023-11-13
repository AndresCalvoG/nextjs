import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Navbar />
      {children}
      <footer className="footer">This is the footer</footer>

      <style jsx>
        {`
          .footer {
            background-color: red;
          }
        `}
      </style>
    </div>
  );
};
export default Layout;
