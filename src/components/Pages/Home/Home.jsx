import React from "react";
import Charts from "../Charts/Charts";
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";
import "./Hoem.css";
import { userData } from "../../../Data";
import WidgetLarge from "../../WIdgetLarge/WidgetLarge";
import WidgetsSmall from "../../WidgetsSmall/WidgetsSmall";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="user stats analytics"
        grid
        dataKey="active user"
      />
      <div className="homeWidgets">
        <WidgetsSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
