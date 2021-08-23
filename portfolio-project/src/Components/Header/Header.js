import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Development and Designing</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Facebook and SMM",
            "Google Ads",
          ]}
          typeSpeed ={30}
          backSpeed ={30}
          loop
        />
        <a href ="#" className = "btn-main-offer">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
