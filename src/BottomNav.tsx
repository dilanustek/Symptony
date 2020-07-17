import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import List from "@material-ui/icons/List";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Settings from "@material-ui/icons/Settings";
import "./navBar.css";
import { withRouter } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const pathsArr = ["/viewEntries", "/analytics", "/settings"];

  const RouterBottomNavigation = withRouter(({ history }) => (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(pathsArr[newValue]);
      }}
      showLabels
      className="navBar"
    >
      <BottomNavigationAction label="Entries" icon={<List />} />
      <BottomNavigationAction label="Insights" icon={<TrendingUp />} />
      <BottomNavigationAction label="Settings" icon={<Settings />} />
    </BottomNavigation>
  ));

  return <RouterBottomNavigation />;
}
