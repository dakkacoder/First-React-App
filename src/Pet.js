import React, {Component} from 'react';
//took off the react because we're importing react
import './style.css';
import HobbyList from './HobbyList';
export default class Pet extends Component {
    render() {
        return (<div className = "card">
        <h2 className = "name">Moxie</h2>
        <img src="https://i.ytimg.com/vi/4vpW_j2CnyA/maxresdefault.jpg" alt= "moxie"/>
        <h5 style = {{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
        <HobbyList />
        </div>);
    }
}

// export default Pet;