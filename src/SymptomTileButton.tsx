import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Symptom } from "./SymptomHelpers";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors/";
import { Typography } from "@material-ui/core";

interface Props {
  toggleSymptom: () => void;
  symptom: Symptom;
  symptomSelected: boolean;
}

export default class SymptomTileButton extends Component<Props, {}> {
  render() {
    const SympTileButton = styled(Button)({
      width: "130px",
      height: "64px",
      textTransform: "capitalize",
      background: this.props.symptomSelected ? purple[200] : purple[100],
    });

    return (
      <>
        <SympTileButton
          variant="contained"
          color="secondary"
          onClick={() => this.props.toggleSymptom()}
        >
          <Typography>{this.props.symptom}</Typography>
        </SympTileButton>
      </>
    );
  }
}
