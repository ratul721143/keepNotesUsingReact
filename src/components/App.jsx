import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notesArray from "../notesArray";

function App() {
  const [notes, setNotes] = useState([]);

  const handelchange = (note) => {
    setNotes((preVal) => {
      return [...preVal, note];
    });
  };
  const deleteNote = (id) => {
    setNotes((preVal) => {
      return notes.filter((note, index) => id !== index);
    });
  };

  return (
    <div>
      <Header />
      <CreateArea submitNote={handelchange} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
