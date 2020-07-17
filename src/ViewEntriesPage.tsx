import React, { Component } from "react";
import { SymptomsAndFactors } from "./SymptomHelpers";
import BottomNav from "./BottomNav";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

class ViewEntriesPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <div> Entries</div>
        <BottomNav />
      </>
    );
  }
}

export default ViewEntriesPage;
