import React from 'react';


class Results extends React.Component {



    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        )
    }
}

export default Results;