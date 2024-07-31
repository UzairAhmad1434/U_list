import notes from "../assets/data.js";
const NotesListPages = () => {
  return (
    <div>
      <div>
        {notes.map((note) => (
          <p key={note.id}>{note.body}</p>
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
