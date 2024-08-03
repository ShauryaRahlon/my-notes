import React from 'react';
import ReactMarkdown from "react-markdown";


const Notes = ({ activenote, onUpdateNotes }) => {
    const onEditField = (key, value) => {
        onUpdateNotes({
            ...activenote,
            [key]: value,
            lastModified: Date.now()
        });
    };

    if (!activenote) return <div className='no-active-note'>No note Selected</div>;

    return (
        <div className='app-main'>
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id='title'
                    value={activenote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                />
                <br />
                <textarea
                    id="body"
                    wrap='soft'
                    placeholder='Write your note here...'
                    value={activenote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                />
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activenote.title}</h1>
                <ReactMarkdown className="markdown-preview">{activenote.body}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Notes;
