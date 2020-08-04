import React from "react";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

interface Props {
  title: string;
}

const TitleDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

function LargeHeader(props: Props) {
  return (
    <>
      <Typography variant="h5"> {props.title}</Typography>
      <TitleDivider variant="fullWidth" />
    </>
  );
}

export default LargeHeader;
