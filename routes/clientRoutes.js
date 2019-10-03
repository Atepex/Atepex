const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
    app.get("/api/getclients", async (req, res) => {
        const users = await User.find({admin: false});
        if (users) {
          res.send(users);
          return;
        }
    
        res.status(404).send('Not Found');
      });
};
