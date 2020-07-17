import React, { Component } from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import SetFactorsPage from "./SetFactorsPage";
import { History } from "history";
import { SymptomsAndFactors, Factor, Symptom, Entry } from "./SymptomHelpers";
import "./App.css";
import ViewEntriesPage from "./ViewEntriesPage";
import AnalyticsPage from "./AnalyticsPage";
import SettingsPage from "./SettingsPage";
import NavBar from "./NavBar";

interface State {
  symptomsAndFactors: SymptomsAndFactors;
  allEntries: Entry[];
}

interface Props {
  history: History;
}

class AppInner extends Component<Props, State> {
  // for development
  symptomsAndFactors: SymptomsAndFactors = {
    PAIN: [Factor.ACTIVITY, Factor.EXERCISE],
    VERTIGO: [Factor.SLEEP, Factor.MOOD],
  };

  state: State = {
    symptomsAndFactors: this.symptomsAndFactors,
    allEntries: [],
  };

  // state: State = {
  //   symptomsAndFactors: {},
  // };

  componentDidMount() {
    // uncomment to get out of development mode and the code below
    // this.props.history.push("/setSymptoms");

    //  for development
    this.props.history.push("/main/entries/");
  }

  setSymptomsAndFactors = (symptom: Symptom, factor?: Factor) => {
    const symptomsAndFactors = this.state.symptomsAndFactors;
    const factorList = symptomsAndFactors[symptom];

    if (!factor) {
      //toggle symptom
      if (!factorList) {
        // symptom doesn't exist. Add it.
        symptomsAndFactors[symptom] = [];
      } else {
        delete symptomsAndFactors[symptom];
      }
    } else {
      // toggle factor
      if (!factorList)
        return Error("Symptom is null while trying to add factors.");

      // if factor is there remove it, otherwise add it.
      if (factorList.includes(factor)) {
        const removedFactorList = factorList.filter(
          (factor) => factor !== factor
        );
        symptomsAndFactors[symptom] = removedFactorList;
      } else {
        factorList.push(factor);
      }
    }

    this.setState({
      symptomsAndFactors,
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/setSymptoms"
            render={() => (
              <SetSymptomsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
                setSymptomsAndFactors={this.setSymptomsAndFactors}
              />
            )}
          />
          <Route
            exact
            path="/setFactors/:symptomIndex"
            render={(props: RouteComponentProps) => (
              <SetFactorsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
                setSymptomsAndFactors={this.setSymptomsAndFactors}
                symptomIndexParams={props.match.params}
              />
            )}
          />
          <Route
            path="/main/entries"
            render={() => (
              <ViewEntriesPage
                symptomsAndFactors={this.state.symptomsAndFactors}
              />
            )}
          />
          <Route
            path="/main/analytics"
            render={() => (
              <AnalyticsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
              />
            )}
          />
          <Route
            path="/main/settings"
            render={() => (
              <SettingsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
              />
            )}
          />
          {/* <Route path="/newEntry" render{}</Route> */}
        </Switch>
        <Route
          path="/main"
          render={(props) => <NavBar history={props.history} />}
        />
      </div>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
