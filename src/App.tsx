import React, { Component } from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import SetFactorsPage from "./SetFactorsPage";
import { History } from "history";
import { SymptomsAndFactors, Factor } from "./SymptomHelpers";
import "./App.css";
import ViewEntriesPage from "./ViewEntriesPage";

interface State {
  symptomsAndFactors: SymptomsAndFactors;
}

interface Props {
  history: History;
}

class AppInner extends Component<Props, State> {
  state: State = {
    symptomsAndFactors: {},
  };

  componentDidMount() {
    // uncomment to get out of development mode and the code below
    // this.props.history.push("/setSymptoms");

    // for development
    const symptomsAndFactors: SymptomsAndFactors = {};
    symptomsAndFactors.PAIN = [Factor.ACTIVITY, Factor.EXERCISE];

    this.setState({
      symptomsAndFactors,
    });

    this.props.history.push("/viewEntries");
  }

  setSymptomsAndFactors = (symptomsAndFactors: SymptomsAndFactors) => {
    this.setState({
      symptomsAndFactors,
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/setFactors/:symptomIndex"
            render={(props: RouteComponentProps) => (
              <SetFactorsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
                setSymptomsAndFactors={this.setSymptomsAndFactors}
                match={props.match}
              />
            )}
          />
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
            path="/viewEntries"
            render={() => (
              <ViewEntriesPage
                symptomsAndFactors={this.state.symptomsAndFactors}
              />
            )}
          ></Route>
          {/* <Route>path="/newEntry" render{}</Route>
          <Route>path="/analytics" render{}</Route>
          <Route>path="/settings" render{}</Route> */}
        </Switch>
      </div>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
