import React from "react";
import Tracks from "./../tracks/Tracks";
import "./index.css";
import Search from "../tracks/Search";

function Index() {
  return (
    <div className="index row">
      <div className="index__search__area col-lg-3">
        <Search />
      </div>
      <div className="col-lg-8">
        <Tracks />
      </div>
    </div>
  );
}

export default Index;
