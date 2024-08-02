// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListItems = ({ note }) => {
  return (
    <div className="notes-list-item">
      <Link to={`/note/${note.id}`}>
        <p>{note.body}</p>
      </Link>
    </div>
  );
};

export default ListItems;
