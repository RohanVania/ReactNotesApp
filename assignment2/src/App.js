import React, { useState, useEffect } from "react";
import NotesList from "./component/NotesList";
import { nanoid } from "nanoid";
import Header from "./component/Header";
import Search from "./component/Search";

function App() {
  const [notearray, setNotearray] = useState([]);

  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotearray(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notearray));
  }, [notearray]);

  function addNewnote(data) {
    let date = new Date();
    const note = {
      id: nanoid(),
      text: data,
      date: date.toLocaleDateString(),
    };
    const newnotearray = [...notearray, note];
    setNotearray(newnotearray);
  }

  function handleDelete(id) {
    const newnotearray = notearray.filter((note) => {
      return note.id != id;
    });
    setNotearray(newnotearray);
  }

  function handleSearchNote(text) {
    setSearchtext(text);
  }

  return (
    <div className="main-box">
      <Header />
      <Search searchText={searchText} handleSearchNote={handleSearchNote} />

      <NotesList
        handleDelete={handleDelete}
        addNewnote={addNewnote}
        notesarray={notearray.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
      />
    </div>
  );
}

export default App;
