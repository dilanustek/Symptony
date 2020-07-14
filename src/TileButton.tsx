import React from "react";
import Button from "@material-ui/core/Button";
import { Symptom } from "./SymptomHelpers";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors/";
import { Typography } from "@material-ui/core";
import { SymptomNames } from "./SymptomHelpers";

interface Props {
  toggleSymptom: () => void;
  symptom: Symptom;
  symptomSelected: boolean;
}

const TileButton = (props: Props) => {
  const TileBtn = styled(Button)({
    width: "130px",
    height: "64px",
    textTransform: "capitalize",
    background: props.symptomSelected ? purple[200] : purple[100],
  });

  return (
    <>
      <TileBtn
        variant="contained"
        color="secondary"
        onClick={props.toggleSymptom}
      >
        <Typography>{SymptomNames[props.symptom]}</Typography>
      </TileBtn>
    </>
  );
};

export default TileButton;
