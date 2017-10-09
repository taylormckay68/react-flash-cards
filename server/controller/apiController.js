const axios = require('axios')
    , session = require('express-session');
require('dotenv').config();

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function getRandom(arrObj) {
    let arr = [];
    let finalArrOfObj = [];

    for (let i = 0; i < arrObj.length; i++) {
        arr.push(i);
    }
    let shuffledArr = shuffle(arr);

    for (let j = 0; j < shuffledArr.length; j++) {
        finalArrOfObj.push(arrObj[shuffledArr[j]]);
    }
    return finalArrOfObj
}

module.exports = {
    getJSAll: () => {
        axios.get(`https://api.quizlet.com/2.0/sets/216066988?client_id=${process.env.QUIZLET_KEY}&whitespace=1`).then(response => {
            let data = response.data.terms;
            req.session.cards = getRandom(data);
            res.status(200).send({firstCard: req.session.cards[0], length: req.session.cards.length})
        })
    },
    getJSBasic: (req, res, next) => {
        axios.get(`https://api.quizlet.com/2.0/sets/216120524?client_id=${process.env.QUIZLET_KEY}&whitespace=1`).then(response => {
            let data = response.data.terms;
            req.session.cards = getRandom(data);
            res.status(200).send({firstCard: req.session.cards[0], length: req.session.cards.length})
        })
    },
    getJSAdvanced: (req, res, next) => {
        axios.get(`https://api.quizlet.com/2.0/sets/216121281?client_id=${process.env.QUIZLET_KEY}&whitespace=1`).then(response => {
            let data = response.data.terms;
            req.session.cards = getRandom(data);
            res.status(200).send({firstCard: req.session.cards[0], length: req.session.cards.length})
        })
    },
    getReact: (req, res, next) => {
        axios.get(`https://api.quizlet.com/2.0/sets/218386881?client_id=${process.env.QUIZLET_KEY}&whitespace=1`).then(response => {
            let data = response.data.terms;
            req.session.cards = getRandom(data);
            res.status(200).send({firstCard: req.session.cards[0], length: req.session.cards.length})
        })
    },
    getCss: (req, res, next) => {
        axios.get(`https://api.quizlet.com/2.0/sets/216076590?client_id=${process.env.QUIZLET_KEY}&whitespace=1`).then(response => {
            console.log('css fired');
            console.log(req);
            let data = response.data.terms;
            req.session.cards = getRandom(data);
            console.log(req.session.cards);
            res.status(200).send({firstCard: req.session.cards[0], length: req.session.cards.length})
        })
    },
    getHtml: (req, res, next) => {
        axios.get(`https://api.quizlet.com/2.0/sets/216078345?client_id=${process.env.QUIZLET_KEY}&whitespace=1`).then(response => {
            let data = response.data.terms;
            req.session.cards = getRandom(data);
            res.status(200).send({firstCard: req.session.cards[0], length: req.session.cards.length})
        })
    }
}