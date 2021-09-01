import React, { Component } from 'react';
import Notes from '../Main/Notes/Notes';
import AddNote from './AddNote/AddNote';
import Navbar from '../Navbar/Navbar';
import Favorites from './Favorites/Favorites';
class Main extends Component {
    
    render() {


        return (
            <div>
                <Navbar></Navbar>
                {/* <Favorites notes={this.state.notes}></Favorites> */}
                {/* <Notes notes={this.state.notes} /> */}
                {/* <AddNote /> */}
            </div>
        );
    }
}

export default Main;