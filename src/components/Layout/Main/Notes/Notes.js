import React from 'react';
import Aux from '../../hoc/Aux';
import Note from '../Notes/Note/Note';
import classes from './Notes.css';

const notes = () => {
return (
    <Aux>
        <div className={classes.Notes}>
            <Note/>
        </div>
    </Aux>
);
}

export default notes