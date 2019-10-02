// keys.js figure out what set of credentials to return

if(process.env.NODE_ENV === 'production'){
    // we are in the production environment (Heroku)
    module.exports = require('./prod');
} else {
    // we are in dev environment
    module.exports = require('./dev');
}