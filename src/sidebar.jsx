import React from 'react';

const Sidebar = ({ notes, onAddNote, onDeleteNote, activenote, setActivenote }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>My notes</h1>
                <button onClick={onAddNote}>➕</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map(({ id, title, body, lastModified }) => (
                    <div
                        key={id}
                        className={`app-sidebar-note ${id === activenote ? "active" : ""}`}
                        onClick={() => setActivenote(id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{title}</strong>
                            <button className='del' onClick={(e) => {
                                e.stopPropagation();
                                onDeleteNote(id);
                            }}>❎</button>
                        </div>
                        <p className='fix'>{body && body.substr(0, 34) + "..."}</p>
                        <small className="note-meta">
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
