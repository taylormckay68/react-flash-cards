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
    , controller = require('./controller/apiController')

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

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('DB connect error >> ', err)
})

passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACK
},
function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    let db = app.get('db');
    db.getUserByAuthId([profile.id]).then((response) => {
        user = response[0];
        if (!user) {
            console.log('CREATING USER');
            db.createUserByAuth([profile.id, profile.displayName]).then((user) => {
                return done(null, user)
            })
        } else {
            console.log('FOUND USER', user);
            return done(null, user)
        }
    }).catch(err => {
        console.log(err)
    });
}
));

passport.serializeUser(function(user, done) {
    console.log('deserializing user: ', user)
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    console.log('serializing user: ', user)
    done(null, user)
})

app.get('/api/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/profile',
    failureRedirect: '/'
}));

app.get('/api/getquizzes/:id', (req, res, next) => {
    // console.log(req.session);
    switch(req.params.id) {
        case 'CSS':
            controller.getCss(req, res, next);
            break;
        case 'HTML':
            controller.getHtml(req, res, next);
            break;
        case 'JSBasic':
            controller.getJSBasic(req, res, next);
            break;
        case 'JSAdvanced':
            controller.getJSAdvanced(req, res, next);
            break;
        case 'JSAll':
            controller.getJSAll(req, res, next);
            break;
        case 'React':
            controller.getReact(req, res, next);
            break;

    }
})



app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})