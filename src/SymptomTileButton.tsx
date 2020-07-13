import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Symptom } from "./SymptomHelpers";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors/";

interface Props {
  addSymptom: (newSymptom: Symptom) => void;
  symptomName: Symptom;
  symptomSelected: boolean;
}

export default class SymptomTileButton extends Component<Props, {}> {
  render() {
    const SympTileButton = styled(Button)({
      margin: "8px",
      width: "130px",
      height: "64px",
      fontSize: "14px",
      textTransform: "capitalize",
      background: this.props.symptomSelected ? purple[200] : purple[100],
    });

    return (
      <>
        <SympTileButton
          variant="contained"
          // color={this.props.symptomSelected ? "primary" : "secondary"}
          color="secondary"
          onClick={() => this.props.addSymptom(this.props.symptomName)}
        >
          {this.props.symptomName}
        </SympTileButton>
      </>
    );
  }
}
