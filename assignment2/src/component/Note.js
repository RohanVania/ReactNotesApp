import React from "react";
import "../index.css";
import { BsTrashFill } from "react-icons/bs";

function Note({ text, date, id, handleDelete }) {
  function deleteNote() {
    handleDelete(id);
  }

  return (
    <div id={id} className="note">
      <span>{text}</span>
      <div className="notes-footer">
        <small className="date">{date}</small>
        <button onClick={deleteNote} className="delete-btn">
          <BsTrashFill />
        </button>
      </div>
    </div>
  );
}

export default Note;
