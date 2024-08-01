import notes from "../assets/data.js";
import { Link } from "react-router-dom";

const ListItems = () => {
  return (
    <div>
      {notes.map((note) => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <p>{note.body}</p>
        </Link>
      ))}
    </div>
  );
};

export default ListItems;
