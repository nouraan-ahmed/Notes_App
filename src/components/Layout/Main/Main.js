import React, { Component } from 'react';
import Notes from '../Main/Notes/Notes';
import AddNote from './AddNote/AddNote';

class Main extends Component {
    render() {
        return (
            <div>
                <Notes/>
                <AddNote/>
            </div>
        );
    }
}

export default Main;