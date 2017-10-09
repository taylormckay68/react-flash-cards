import React, { Component } from 'react';

export default class Flashcard extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div>
                <div className="card">
                    {this.props.currentCard.term}
                </div>
                <button className="wrong">&times;</button>
                <button className="right">&#x02713;</button>
            </div>
        )
    }
}