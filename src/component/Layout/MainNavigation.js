import React from "react";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <button onClick={props.onToggle}>
          {!props.active ? "Show map" : "Show table"}
        </button>
      </nav>
    </header>
  );
};

export default MainNavigation;
