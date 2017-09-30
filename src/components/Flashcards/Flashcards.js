import React, { Component } from 'react';

export default class Flashcards extends Component {
    render() {
        return(
            <div className="flashcard-container">
                {this.props.match.params.id}
            </div>
        )
    }
}