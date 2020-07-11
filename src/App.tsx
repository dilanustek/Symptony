import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import { History } from "history";

import "./App.css";
type Props = {
  history: History;
};

class AppInner extends Component<Props, {}> {
  componentDidMount() {
    this.props.history.push("/setSymptoms");
  }

  render() {
    return (
      <Switch>
        <Route path="/home" render={() => <div>hello antoine</div>} />
        <Route path="/setSymptoms" component={SetSymptomsPage} />
        {/* <Route>path="/setFactors" render{}</Route>
          <Route>path="/viewEntries" render{}</Route>
          <Route>path="/newEntry" render{}</Route>
          <Route>path="/analytics" render{}</Route>
          <Route>path="/settings" render{}</Route> */}
      </Switch>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
