import React from 'react';
import Aux from '../../../../hoc/Auxi.jsx';
import Note from './Note/Note';
import classes from './Notes.css';

const notes = () => {
return (
    <Aux>
        <div className={classes.Notes}>
            <Note title="First Note" content="This is content of first note"/>
            <Note title="Second Note" content="Hello from Note app"/>
            <Note title="Third Note" content="This is lol"/>
        </div>
    </Aux>
);
}

export default notes