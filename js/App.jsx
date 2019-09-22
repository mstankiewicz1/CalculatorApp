import React from 'react';
import Buttons from './Buttons.jsx';
import Results from './Results.jsx';

class App extends React.Component {

    state = {
      result: ''
    };


    buttonPressed = buttonName => {
        this.setState({
          result: buttonName,
        })
    };



    render() {
        return (
            <div>
               <Results result={this.state.result}/>
               <Buttons buttonPressed={this.buttonPressed}/>
            </div>
        )
    }
}

export default App;