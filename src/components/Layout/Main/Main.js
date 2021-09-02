import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from '../../../axios';

class Main extends Component {

state={
    notes:null,
}

componentWillMount (){

    axios.get('/notes.json').then(response => {
        const notes = response.data;
        return notes
    }).then( data => {
        console.log(data)
        this.setState({
            notes:data
        })
        console.log(this.state.notes)
      });
}


    render() {
        return (
            <div>
                <Navbar notes={this.state.notes}></Navbar>
            </div>
        );
    }
}

export default Main;