import React, { Component } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import axios from 'axios';


export default class Flashcards extends Component {
    constructor() {
        super();
        this.state = {
            currentCard: {},
            setLength: ''
        }
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
    render() {
        
        return(
            <div className="flashcard-container">

                <Flashcard currentCard={this.state.currentCard}/>
            </div>
        )
    }
}