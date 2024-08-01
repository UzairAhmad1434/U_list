import { Route, Routes } from "react-router-dom";
import NotesListPages from "../page/NotesListPages";
import Notepages from "../page/Notepages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesListPages />} />
      <Route path="/note/:id" element={<Notepages />} />
    </Routes>
  );
};

export default Router;
