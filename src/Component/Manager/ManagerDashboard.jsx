import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./DashboardHR.css";

import Sidebar from "./Sidebar.jsx";
import MainContent from "./Router.jsx";
import NavBar from "../../Pages/Navbar/NavBar.jsx";
import DashContainer from "../DashContainer.jsx";

const DashboardHR = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    console.log("switch");

    if (checked) {
      document.getElementById("sidebar").setAttribute("class", "display-none");
    } else {
      document.getElementById("sidebar").setAttribute("class", "display-block");
    }

    setChecked(!checked);
  };

  return (
    <DashContainer>
      <Router>
        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar
              loginInfo={props.data}
              checked={checked}
              handleChange={handleChange}
              onLogout={props.onLogout}
            />
          </div>
          <div className="d-flex">
            <Sidebar />
            <div className="p-0 w-100">
              <MainContent />
            </div>
          </div>
        </div>
      </Router>
    </DashContainer>
  );
};

export default DashboardHR;
