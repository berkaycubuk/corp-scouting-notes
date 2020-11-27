import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import moment from "moment";

function NoteListItem({ note }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card style={{ marginTop: "10px" }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <Typography style={{ color: "#666" }}>{note.name}</Typography>
          <span>&nbsp;-&nbsp;</span>
          <Typography style={{ color: "#666", flexGrow: 1 }}>
            {moment(note.date.toDate()).format("DD.MM.YYYY")}
          </Typography>
        </div>
        <Typography variant="h6">{note.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default NoteListItem;
