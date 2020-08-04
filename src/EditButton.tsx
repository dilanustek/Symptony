import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

interface Props {
  path: string;
}

const EditButton = (props: Props) => {
  const EditButtonRouter = withRouter(({ history }) => (
    <IconButton
      color="primary"
      size="medium"
      onClick={() => {
        history.push(props.path);
      }}
    >
      <EditIcon />
    </IconButton>
  ));

  return <EditButtonRouter />;
};

export default EditButton;
