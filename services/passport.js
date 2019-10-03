const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //profile.name.familyname
      //profile.name.givenname
	  //profile.emails[0].value
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        //we already have a record with the given profile ID
        return done(null, existingUser);
      }

      //we don't have a user record with this profile ID
      const user = await new User({
        googleID: profile.id,
        firstName: profile.name ? profile.name.givenName : "",
        lastName: profile.name ? profile.name.familyName : "",
        email: profile.emails.length > 0 ? profile.emails[0].value : ""
      }).save();
      done(null, user);
    }
  )
);
