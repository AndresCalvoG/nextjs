import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};
export default Layout;
