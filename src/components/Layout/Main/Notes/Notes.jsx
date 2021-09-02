import React,{Component} from 'react';
import Aux from '../../../../hoc/Auxi';
import Note from './Note/Note';

class notes extends Component {


render(){
    
    let notes = Object.keys(this.props.notes).map(igKey => {
        return <Note key={igKey} title={this.props.notes[igKey].title} content={this.props.notes[igKey].content} />
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