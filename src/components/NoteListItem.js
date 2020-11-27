import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";

export default function NoteListItem({ note }) {
  return (
    <Card style={{ marginTop: "10px" }}>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flexGrow: 1 }}>
          <Typography style={{ color: "#666", marginBottom: "5px" }}>
            26.11.2020
          </Typography>
          <Typography variant="h6">{note.description}</Typography>
        </div>
        <IconButton color="secondary">
          <span className="material-icons">delete</span>
        </IconButton>
      </CardContent>
    </Card>
  );
}
