import { useParams } from "react-router-dom";
import notes from "../assets/data.js";

const Notepages = () => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));

  return (
    <div>
      {note ? (
        <div>
          <h1>Note {note.id}</h1>
          <p>{note.body}</p>
        </div>
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

export default Notepages;
