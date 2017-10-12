import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default function instructions(props) {
    let style = {
        background: '#2aabe2',
        color: 'white',
    }
    return (
        <div className="instructions-container">
            <h2>Instructions</h2>
            <p>Based off what topic you selected a set of flashcards will be generated for you to study. 
You will be able to select ones you get right and wrong by toggling the two boxes located below the flashcard. Enjoy!</p>
            <RaisedButton buttonStyle={style} onClick={() => props.handleStartClick()}>START</RaisedButton>
        </div>
    )
}