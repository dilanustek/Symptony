import React, { Component } from "react";
import { SymptomsAndFactors } from "./SymptomHelpers";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

class AnalyticsPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <div> Analytics</div>
      </>
    );
  }
}

export default AnalyticsPage;
