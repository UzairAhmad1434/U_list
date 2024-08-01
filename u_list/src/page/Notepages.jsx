import { useParams } from "react-router-dom";
import notes from "../assets/data.js";
import { Link } from "react-router-dom";
// import { ReactComponent as MyIcon } from "../assets/myicon.svg";

const MyIcon = () => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
        stroke="#ff7b00"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </g>
  </svg>
);

const Notepages = () => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));

  return (
    <div className="note">
      <div className="note-header">
        <h3 className="notes-title">
          <Link to="/">
            <MyIcon />
          </Link>
        </h3>
      </div>

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
