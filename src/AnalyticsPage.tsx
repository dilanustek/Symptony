import React, { Component } from "react";
import { SymptomsAndFactors } from "./SymptomHelpers";
import BottomNav from "./BottomNav";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

class AnalyticsPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <div> Analytics</div>
        <BottomNav />
      </>
    );
  }
}

export default AnalyticsPage;
