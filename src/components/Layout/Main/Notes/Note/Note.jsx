import React, { Component } from 'react';
import Aux from '../../../../../hoc/Auxi';

class Note extends Component {
    render() {
        return (
            <Aux>
                <div class="bg-primary w-1/4 h-60 m-2 rounded-2xl inline-block border-white border-2">
                    <h4 class="text-center font-bold text-white p-5">{this.props.title}</h4>
                    <hr />
                    <p class="m-2 text-white p-3" dangerouslySetInnerHTML={{__html:this.props.title}}></p>
                </div>
            </Aux>
        );
    }
}

export default Note;