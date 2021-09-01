import React,{Component} from 'react';
import Aux from '../../../../hoc/Auxi';
import Note from './Note/Note';
import axios from '../../../../axios';

class notes extends Component {

state={
    notes:[],
}

constructor (props){
    super(props)
    axios.get('/notes.json').then(response => {
        const notes = response.data;
        this.setState({
            notes:notes
        });
    });
}

render(){
    this.setState()
    
    let notes = Object.keys(this.state.notes).map(igKey => {
        return <Note key={igKey} title={this.state.notes[igKey].title} content={this.state.notes[igKey].content} />
    });
    // console.log(notes);

return (
    <Aux>
        <div class="m-8">
            {notes}
        </div>
    </Aux>
);
}
}
export default notes