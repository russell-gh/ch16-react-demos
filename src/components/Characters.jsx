import React, { Component } from 'react';
import Character from './Character';

class Characters extends Component {
    render() { 
        return this.props.characters.map((item) => {
            return <Character {...item} />
        })
    }
}
 
export default Characters;