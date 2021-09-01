import React from 'react';
// import Aux from '../../../../hoc/Auxi';
import Note from './Note/Note';

const notes = (props) => {


    return props.notes.map((note, index) => {
        // console.log(person)
        return <Note
            title={note.title}
            content={note.content}
            key={note.id}
        />

    })
    // return (
    //     <Aux>
    //         <div>
    //             {mynotes}
    //             {/* <Note title="First Note" content="This is content of first note" />
    //             <Note title="Second Note" content="Hello from Note app" />
    //             <Note title="Third Note" content="This is lol" /> */}
    //         </div>
    //     </Aux>
    // );
}

export default notes