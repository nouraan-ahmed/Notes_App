import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import Aux from '../../../../../hoc/Auxi';

class Note extends Component {


    render() {
        return (
            <Aux>
                <div class="bg-primary w-1/4 h-60 m-2 rounded-2xl inline-block border-white border-2">
                    <h4 class="text-center font-bold text-white p-5 inline-block">{this.props.title}</h4>
                    <FontAwesomeIcon icon={faStar} className="hover:text-yellow-500 text-2xl text-white"></FontAwesomeIcon>
                    <hr />
                    <p class="m-2 text-white p-3" dangerouslySetInnerHTML={{__html:this.props.content}}></p>
                </div>
            </Aux>
        );
    }
}

export default Note;