import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface Props {
  label: string;
  path: string;
  onNext: () => void;
}

const NextButton = (props: Props) => {
  const RouterButton = withRouter(({ history }) => (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() => {
        history.push(props.path);
        props.onNext();
      }}
    >
      {props.label}
    </Button>
  ));

  return <RouterButton />;
};

export default NextButton;
