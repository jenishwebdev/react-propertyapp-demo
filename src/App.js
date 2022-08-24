import React, { Fragment, useState } from "react";
import Map from "./component/Map/Map";
import Table from "./component/table/Table";
import { useLoadScript } from "@react-google-maps/api";
import MainNavigation from "./component/Layout/MainNavigation";
import classes from "./App.module.css";
const App = () => {
  const [isActive, setIsActive] = useState(true);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "", // Add your API key
  });

  const toggleBtn = () => {
    setIsActive(isActive ? false : true);
  };

  return (
    <Fragment>
      <MainNavigation onToggle={toggleBtn} active={isActive} />
      <div className={classes.main}>
        {isActive && isLoaded && <Map />}
        {!isActive && <Table />}
      </div>
    </Fragment>
  );
};

export default App;
