import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors/";
import { Typography } from "@material-ui/core";

interface Props {
  onClick: () => void;
  tileName: string;
  isSelected: boolean;
}

const TileButton = (props: Props) => {
  const TileBtn = styled(Button)({
    width: "130px",
    height: "64px",
    textTransform: "capitalize",
    background: props.isSelected ? purple[200] : purple[100],
  });

  return (
    <>
      <TileBtn variant="contained" color="secondary" onClick={props.onClick}>
        <Typography>{props.tileName}</Typography>
      </TileBtn>
    </>
  );
};

export default TileButton;
