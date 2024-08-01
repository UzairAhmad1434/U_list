import ListItems from "../components/ListItems.jsx";
import notes from "../assets/data.js";
const NotesListPages = () => {
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; U_Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <ListItems />
    </div>
  );
};

export default NotesListPages;
