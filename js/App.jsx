import React from 'react';
import Buttons from './Buttons.jsx';
import Results from './Results.jsx';

class App extends React.Component {

    state = {
      result: ''
    };


    buttonPressed = buttonName => {
        if (buttonName === '=') {
            this.calculate()
        } else if (buttonName === 'C'){
            this.reset();
        } else if (buttonName === 'CE') {
            this.backspace();
        } else {
            this.setState({
                result: this.state.result + buttonName,
            })
        }
    };

    calculate = () => {
        try {this.setState({
            result: eval(this.state.result),
        })} catch (e) {
            this.setState({
                result: 'error'
            })
        }
    };

    reset = () => {
        this.setState({
            result: ''
        })
    };

    backspace = () => {
      this.setState({
          result: this.state.result.slice(0,-1),
      })
    };


    render() {
        return (
            <div className="app">
                <div className="calc-body">
                       <Results result={this.state.result}/>
                       <Buttons buttonPressed={this.buttonPressed}/>
                </div>
            </div>
        )
    }
}

export default App;