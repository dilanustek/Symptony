import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors/";
import { Typography } from "@material-ui/core";

interface Props {
  onClick: () => void;
  tileName: string;
  isSelected: boolean;
}

const SmallTileButton = (props: Props) => {
  const TileBtn = styled(Button)(({ theme }) => ({
    width: theme.spacing(18),
    height: theme.spacing(4),
    textTransform: "none",
    background: props.isSelected ? grey[300] : grey[100],
  }));

  return (
    <>
      <TileBtn variant="contained" color="secondary" onClick={props.onClick}>
        <Typography>{props.tileName}</Typography>
      </TileBtn>
    </>
  );
};

export default SmallTileButton;
