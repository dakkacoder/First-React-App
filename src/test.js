import React, {Component} from 'react';

export default class Pet extends Component {
    render() {
        return (<div className = "card">
            <h2 className = "name">Moxie</h2>
            <img src="https://i.ytimg.com/vi/4vpW_j2CnyA/maxresdefault.jpg" alt= "moxie the cat"/>
            <h5 style = {{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
            </div>);
    }
}

// export default Pet;