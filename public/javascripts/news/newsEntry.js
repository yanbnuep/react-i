import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render(){
        return (
        <div className="App">
            <p>Hello , welcome</p>
        </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));