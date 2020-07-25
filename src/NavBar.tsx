import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import List from "@material-ui/icons/List";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Settings from "@material-ui/icons/Settings";
import "./navBar.css";
import { History } from "history";
import { styled } from "@material-ui/core/styles";

interface Props {
  history: History;
}
const BottomNavWBorderTop = styled(BottomNavigation)(({ theme }) => ({
  borderTop: "1px solid lightgrey",
}));

export default function NavBar(props: Props) {
  const [value, setValue] = React.useState(0);
  const pathsArr = ["/main/entries", "/main/analytics", "/main/settings"];

  return (
    <BottomNavWBorderTop
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        props.history.push(pathsArr[newValue]);
      }}
      showLabels
      className="navBar"
    >
      <BottomNavigationAction label="Entries" icon={<List />} />
      <BottomNavigationAction label="Insights" icon={<TrendingUp />} />
      <BottomNavigationAction label="Settings" icon={<Settings />} />
    </BottomNavWBorderTop>
  );
}
