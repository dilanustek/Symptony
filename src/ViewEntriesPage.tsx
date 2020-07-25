import React, { Component } from "react";
import { SymptomsAndFactors, Symptom, Entry } from "./SymptomHelpers";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import AddNewEntryButton from "./AddNewEntryButton";
import LargeHeader from "./LargeHeader";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import { ListItemSecondaryAction } from "@material-ui/core";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom;
  allEntries: Entry[];
  setSelectedSymptom: (selectedSymptom: Symptom) => void;
}

class ViewEntriesPage extends Component<Props, {}> {
  getSymptomEntries() {
    return this.props.allEntries.filter(
      (entry) => entry.symptom === this.props.selectedSymptom
    );
  }

  getReadableDate(date: Date) {
    const dayNum = date.getDay();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthNum = date.getMonth();

    const militaryHour = date.getHours();
    const standardHour = militaryHour - 12;

    const minutes = date.getMinutes();
    const fullMinutes = (minutes < 10 ? "0" : "") + minutes;

    return (
      weekday[dayNum] +
      ", " +
      monthNames[monthNum] +
      " " +
      date.getDate() +
      " - " +
      standardHour +
      ":" +
      fullMinutes +
      (militaryHour - 12 < 0 ? " am" : " pm")
    );
  }

  getEntryListItems() {
    const entries: Entry[] = this.getSymptomEntries();

    return entries.map((entry) => (
      <ListItem button key={Number(entry.timestamp)}>
        <ListItemText primary={this.getReadableDate(entry.timestamp)} />
        <ListItemSecondaryAction>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  }

  render() {
    return (
      <>
        <LargeHeader title="Symptom entries" />
        <SelectedSymptomsDropdown
          symptomsAndFactors={this.props.symptomsAndFactors}
          setSelectedSymptom={this.props.setSelectedSymptom}
          selectedSymptom={this.props.selectedSymptom}
        />
        <AddNewEntryButton />
        <List component="nav">{this.getEntryListItems()}</List>
      </>
    );
  }
}

export default ViewEntriesPage;
