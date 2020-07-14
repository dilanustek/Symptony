import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

interface Props {
  buttonText: string;
}

export default class NextButton extends Component<Props, {}> {
  render() {
    const RouterButton = withRouter(({ history }) => (
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/home");
        }}
      >
        {this.props.buttonText}
      </Button>
    ));

    const StyledRouterButton = styled(RouterButton)({
      alignSelf: "center",
    });
    return <StyledRouterButton />;
  }
}
