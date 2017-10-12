import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Flashcard extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        let styleCorrect = {
            background: '#2aabe2',
            color: 'white',
        }
        let styleIncorrect = {
            background: '#2aabe2',
            color: 'white',
        }
        let style = {
            marginRight: '50px'
        }
        return(
            <div className="flashcard-container">
                <div className="card">
                    {this.props.currentCard.term}
                </div>
                <div className="right-wrong-container">
                    <RaisedButton style={style} buttonStyle={styleIncorrect}>Incorrect</RaisedButton>
                    <RaisedButton buttonStyle={styleCorrect}>Correct</RaisedButton>
                </div>
            </div>
        )
    }
}