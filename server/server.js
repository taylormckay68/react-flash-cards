require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , app = express()
    , session = require('express-session')
    , axios = require('axios')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')

app.set('port', process.env.PORT || 3040)
app.use(bodyParser.json())
app.use(cors())

app.use(session({
    resave: process.env.RESAVE,
    saveUninitialized: process.env.SAVEUNINITIALIZED,
    secret: process.env.SESSION_SECRET
}))

app.use(passport.initialize());
app.use(passport.session());




app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})