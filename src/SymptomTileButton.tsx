import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Symptom } from "./SymptomHelpers";

interface Props {
  addSymptom: (newSymptom: Symptom) => void;
  symptomName: Symptom;
}

export default class SymptomTileButton extends Component<Props, {}> {
  render() {
    return (
      <>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: #EDD6FF;
      color: black;
      font-size: 16px;
      width: 120px;
      margin: 8px;
      height: 64px;
    }
    `}
        </style>

        <Button
          variant="flat"
          onClick={() => this.props.addSymptom(this.props.symptomName)}
        >
          {this.props.symptomName}
        </Button>
      </>
    );
  }
}
