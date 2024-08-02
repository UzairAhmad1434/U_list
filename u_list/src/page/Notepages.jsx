import { useParams } from "react-router-dom";
import notes from "../assets/data.js";
import { Link } from "react-router-dom";
// import { ReactComponent as MyIcon } from "../assets/myicon.svg";

const MyIcon = () => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 1024.00 1024.00"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ff9500"
      stroke="#ff9500"
      stroke-width="80.896"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
          fill="#ff7b00"
        />
      </g>
    </svg>
  );
};

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
