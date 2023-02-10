import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

function Search({ searchText, handleSearchNote }) {
  return (
    <div className="search-container">
      <BsSearch className="search-icons" />
      <input
        value={searchText}
        onChange={(event) => {
          handleSearchNote(event.target.value);
        }}
        type="text"
        size="5.3em"
      />
    </div>
  );
}

export default Search;
