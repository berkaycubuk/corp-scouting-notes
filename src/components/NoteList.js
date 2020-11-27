import React from "react";
import NoteListItem from "./NoteListItem";

export default function NoteList({ notes }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>Notes</h2>
      {notes &&
        notes.map((note) => {
          return <NoteListItem note={note} key={note.id} />;
        })}
    </div>
  );
}
