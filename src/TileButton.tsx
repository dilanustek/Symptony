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
    height: "64px",
    textTransform: "none",
    background: props.isSelected ? purple[300] : purple[100],
  });

  return (
    <>
      <TileBtn
        variant="contained"
        color="secondary"
        fullWidth={true}
        onClick={props.onClick}
      >
        <Typography>{props.tileName}</Typography>
      </TileBtn>
    </>
  );
};

export default TileButton;
