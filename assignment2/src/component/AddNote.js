import React, { useState } from "react";

import { MdCreate } from "react-icons/md";

function AddNote({ addNewnote }) {
  const [textareavalue, setTextareavalue] = useState("");

  let wordlimit = 250;

  function textareaonchangevalue(event) {
    setTextareavalue(event.target.value);
  }

  function handleNote() {
    if (textareavalue.trim().length > 0) {
      addNewnote(textareavalue);
      setTextareavalue("");
    }
  }

  return (
    <div className="note new-note">
      <textarea
        value={textareavalue}
        onChange={textareaonchangevalue}
        placeholder="Type to add Note here !!!"
        cols="30"
        rows="10"
        maxLength={250}
      ></textarea>
      <div className="notes-footer add-note-footer">
        <small className="">
          Remaining : {(wordlimit = wordlimit - textareavalue.length)}
        </small>
        <button onClick={handleNote} className="add-btn">
          <MdCreate />
        </button>
      </div>
    </div>
  );
}

export default AddNote;
