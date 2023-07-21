import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note.jsx";
import Notes from "../notes";

function app() {
  return (
    <div>
      <Header />
      {Notes.map((eachNote) => (
        <Note
          key={eachNote.key}
          title={eachNote.title}
          content={eachNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default app;
