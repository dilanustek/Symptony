import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

interface Props {
  label: string;
  path: string;
}

const NextButton = (props: Props) => {
  const RouterButton = withRouter(({ history }) => (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() => {
        history.push(props.path);
      }}
    >
      {props.label}
    </Button>
  ));
  const StyledRouterButton = styled(RouterButton)({
    alignSelf: "center",
  });

  return <StyledRouterButton />;
};

export default NextButton;
