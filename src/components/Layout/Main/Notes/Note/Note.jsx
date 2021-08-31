import React, { Component } from 'react';
import Aux from '../../../../../hoc/Auxi';
import classes from './Note.css'

class Note extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.NoteCard}>
                    <h4 className={classes.title}> {this.props.title}</h4>
                    <hr />
                    <p className={classes.NoteDetails}>{this.props.content}</p>
                </div>

            </Aux>
        );
    }
}

export default Note;