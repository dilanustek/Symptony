import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import { styled } from "@material-ui/core/styles";

interface Props {
  timeStamp: Date;
  setTimeStamp: (timeStamp: Date | null) => void;
}

// const WideDatePicker = styled(DatePicker)(({ theme }) => ({
//   width: "100%",
// }));

// const WideTimePicker = styled(TimePicker)(({ theme }) => ({
//   width: "100%",
// }));

export default function DateTimePicker(props: Props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" spacing={2}>
        <Grid item>
          <DatePicker
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={props.timeStamp}
            onChange={props.setTimeStamp}
          />
        </Grid>
        <Grid item xs>
          <TimePicker
            margin="normal"
            id="time-picker"
            value={props.timeStamp}
            onChange={props.setTimeStamp}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
