import React,{Component} from 'react';
import Note from '../Notes/Note/Note';
import Aux from '../../../../hoc/Auxi';

class Favorites extends Component  {

    render(){
    
        let notes = Object.keys(this.props.notes).map(igKey => {
            if(this.props.notes[igKey].favorite){
            return <Note key={igKey} title={this.props.notes[igKey].title} content={this.props.notes[igKey].content} />
            }
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

export default Favorites;