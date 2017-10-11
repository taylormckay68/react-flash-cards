import React, { Component } from 'react';

export default class Flashcard extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div className="flashcard-container">
                <div className="card">
                    {this.props.currentCard.term}
                </div>
                <div className="right-wrong-container">
                    <button className="wrong">&times;</button>
                    <button className="right">&#x02713;</button>
                </div>
            </div>
        )
    }
}