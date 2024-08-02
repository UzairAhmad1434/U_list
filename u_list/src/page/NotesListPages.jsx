import ListItems from "../components/ListItems.jsx";
import { useState, useEffect } from "react";
// import notes from "../assets/data.js";
const NotesListPages = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const url = "http://localhost:5173/";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNotes(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call the fetchData function

  // let getNotes = async () => {
  //   let response = await fetch("http://localhost:5173/notes");
  //   let data = await response.json();
  //   setNotes(data);
  // };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItems key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
