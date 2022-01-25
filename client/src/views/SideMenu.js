import React from "react";

// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../css/side_menu.css";

const btnsArr = [
  { title: "Home", path: "/" },
  { title: "Leitner", path: "/leitnerbox" },
];

const renderBtns = () => {
  let btns = [];

  for (let i = 0; i < btnsArr.length; i++) {
    btns.push(
      //   <div className="side-btn" onClick={()=>console.log("hhfjdhjhjfdhdhkfjshjhf")}>
      //
      //   </div>
      <Link className="side-btn" to={btnsArr[i].path}>
        <h1>{btnsArr[i].title}</h1>
      </Link>
    );
  }

  return btns;
};

const SideMenu = () => {
  return (
    <div className="side-menu">
      <Router>{renderBtns()}</Router>
    </div>
  );
};
export default SideMenu;
