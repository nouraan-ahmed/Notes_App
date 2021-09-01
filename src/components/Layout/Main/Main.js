import React, { Component } from 'react';
import Notes from '../Main/Notes/Notes';
import AddNote from './AddNote/AddNote';
import Navbar from '../Navbar/Navbar';
class Main extends Component {
    state={
        notes: [
			{ id: 'lol1',  title:"First Note", content:"This is content of first note" },
			{ id: 'ddx1',title:"Second Note", content:"Hello from Note app"},
			{ id: 'ed2', title:"Third Note", content:"This is lol" }

		],
		shown: false
        
    }
    render() {


        return (
            <div>
                <Navbar></Navbar>
                <Notes notes={this.state.notes}/>
                <AddNote/>
            </div>
        );
    }
}

export default Main;