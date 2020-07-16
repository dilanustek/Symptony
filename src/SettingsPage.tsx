import React, { Component } from "react";
import { SymptomsAndFactors } from "./SymptomHelpers";
import BottomNav from "./BottomNav";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

class SettingsPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <div> Settings</div>
        <BottomNav />
      </>
    );
  }
}

export default SettingsPage;
