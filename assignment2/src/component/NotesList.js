import React from "react";
import Note from "./Note";
import "../index.css";
import AddNote from "./AddNote";
import Header from "./Header";

function NotesList({ notesarray, addNewnote, handleDelete, searchNote }) {
  return (
    <div className="notes-container">
      <AddNote addNewnote={addNewnote} />
      {notesarray.map((eachnote, keyid) => {
        return (
          <Note
            searchNote={searchNote}
            handleDelete={handleDelete}
            text={eachnote.text}
            date={eachnote.date}
            id={eachnote.id}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
