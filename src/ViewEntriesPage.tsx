import React, { Component } from "react";
import { SymptomsAndFactors } from "./SymptomHelpers";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

export default class ViewEntriesPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <div> Entries</div>
        <div>Bottom nav bar</div>
      </>
    );
  }
}
