import React from 'react';
import Note from '../Notes/Note/Note';
const Favorites = (props) => {
    return props.notes.map((note) => {
        // console.log(person)
        if (note.favorite) {
            return (
                    <Note
                    title={note.title}
                    content={note.content}
                    key={note.id}
            />
            )
        }
        return null;

    })
}


export default Favorites;