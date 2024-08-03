import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Notes from './notes';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activenote, setActivenote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "new note",
      body: "",
      lastModified: Date.now()
    };
    setNotes([...notes, newNote]);
    setActivenote(newNote.id);
  };

  const onUpdateNotes = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activenote);
  };

  return (
    <div className="app">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activenote={activenote}
        setActivenote={setActivenote}
      />
      <Notes activenote={getActiveNote()} onUpdateNotes={onUpdateNotes} />
    </div>
  );
}

export default App;
