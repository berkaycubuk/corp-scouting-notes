import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { connect } from "react-redux";
import { createNote } from "../store/actions/noteActions";

class NoteForm extends Component {
  state = {
    name: "",
    date: new Date(),
    description: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createNote(this.state);
  };

  handleChange = (e) => {
    this.setState({
      // fix it for date
      [e.target.id]: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      date,
    });
  };

  render() {
    return (
      <Card style={{ marginTop: "20px" }}>
        <CardContent>
          <Typography variant="h5">New note</Typography>
          <form
            style={{ marginTop: "10px", marginBottom: "10px" }}
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <div style={{ marginTop: "10px" }}>
              <TextField
                id="name"
                label="Full Name"
                fullWidth
                onChange={this.handleChange}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date"
                  label="Date picker dialog"
                  format="dd.MM.yyyy"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </div>
            <div style={{ marginTop: "10px" }}>
              <TextField
                id="description"
                label="Description"
                multiline
                fullWidth
                onChange={this.handleChange}
              />
            </div>
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note)),
  };
};

export default connect(null, mapDispatchToProps)(NoteForm);
