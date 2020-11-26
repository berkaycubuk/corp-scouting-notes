import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Card style={{ marginTop: "20px" }}>
        <CardContent>
          <Typography variant="h5">New note</Typography>
          <form
            style={{ marginTop: "10px", marginBottom: "10px" }}
            noValidate
            autoComplete="off"
          >
            <div style={{ marginTop: "10px" }}>
              <TextField
                id="noteCreator"
                label="Full Name"
                fullWidth
                required
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <TextField id="noteDate" label="Date" fullWidth required />
            </div>
            <div>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
