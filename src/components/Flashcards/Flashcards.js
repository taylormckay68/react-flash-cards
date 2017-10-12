import React, { Component } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import Instructions from '../Instructions/Instructions';
import axios from 'axios';


export default class Flashcards extends Component {
    constructor() {
        super();
        this.state = {
            currentCard: {},
            setLength: '',
            instructions: true
        }
        this.handleStartClick = this.handleStartClick.bind(this);
    }

    componentDidMount() {
        console.log('id', this.props.match.params.id);
        axios.get(`/api/getquizzes/${this.props.match.params.id}`).then(response => {
            console.log('length', response.data.length);
            this.setState({
                currentCard: response.data.firstCard,
                setLength: response.data.length
            })
        })
    }
    handleStartClick() {
        this.setState({
            instructions: false
        })
    }

    render() {
        
        return(
            <div className="flashcard-wrapper">
                {this.state.instructions ? <Instructions handleStartClick={this.handleStartClick} /> : <Flashcard currentCard={this.state.currentCard}/>}
                
            </div>
        )
    }
}