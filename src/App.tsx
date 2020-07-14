import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import { History } from "history";
import { SymptomsAndFactors } from "./SymptomHelpers";
import "./App.css";

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
    this.props.history.push("/setSymptoms");
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
          <Route path="/home" render={() => <div>hello antoine</div>} />
          <Route
            path="/setSymptoms"
            render={() => (
              <SetSymptomsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
                setSymptomsAndFactors={this.setSymptomsAndFactors}
              />
            )}
          />
          {/* <Route>path="/setFactors" render{}</Route>
          <Route>path="/viewEntries" render{}</Route>
          <Route>path="/newEntry" render{}</Route>
          <Route>path="/analytics" render{}</Route>
          <Route>path="/settings" render{}</Route> */}
        </Switch>
      </div>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
