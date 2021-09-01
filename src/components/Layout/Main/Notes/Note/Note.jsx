import React, { Component } from 'react';
import Aux from '../../../../../hoc/Auxi';

class Note extends Component {
    render() {
        return (
            <Aux>
                <div class="bg-purple-500 w-1/4 h-60 m-2 rounded-2xl inline-block">
                    <h4 class="text-center font-bold text-white"> {this.props.title}</h4>
                    <hr />
                    <p class="m-2 text-white">{this.props.content}</p>
                </div>
            </Aux>
        );
    }
}

export default Note;