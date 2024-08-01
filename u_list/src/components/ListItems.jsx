import notes from "../assets/data.js";
import { Link } from "react-router-dom";

const ListItems = () => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <div className="notes-list-item">
            <p>{note.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListItems;
