import React, { Component } from "react";
import { SymptomsAndFactors } from "./SymptomHelpers";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

class SettingsPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <div> Settings</div>
      </>
    );
  }
}

export default SettingsPage;
