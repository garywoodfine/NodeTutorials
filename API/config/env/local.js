'use strict';
module.exports = {
    db: {
        uri: 'mongodb://localhost/webAPI-dev',
        options: {
            user: '',
            pass: ''
        }
    },
    sessionSecret: process.env.SESSION_SECRET || 'youshouldchangethistosomethingsecret',
    facebook: {
        clientID: process.env.FACEBOOK_ID || 'APP_ID',
        clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/facebook/callback'
    }
};