const passport = require('passport');
const { HeaderAPIKeyStrategy } = require('passport-headerapikey');
const { User } = require('../models')

passport.use(new HeaderAPIKeyStrategy(
    { header: 'apiKey' },
    false,
    function(apiKey, done) {
        User.findOne({
            where: { apiKey }
        })
        .then(result => {
            if (!result) {
                return done(null, false)
            }
            return done(null, result)
        })
        .catch(err => {
            return done(err)
        })
    }
  ));

module.exports = passport