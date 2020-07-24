import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface Props {
  label: string;
  path: string;
  onClick: () => void;
}

const NextButton = (props: Props) => {
  const NextButtonRouter = withRouter(({ history }) => (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() => {
        history.push(props.path);
        props.onClick();
      }}
    >
      {props.label}
    </Button>
  ));

  return <NextButtonRouter />;
};

export default NextButton;
