const mongoose = require("mongoose");

const SystemSettings = mongoose.model("systemSettings");

module.exports = app => {
  app.get("/api/settings", async (req, res) => {
    const settings = await SystemSettings.findOne({name: 'contact'});
    if (settings) {
      res.send(settings.value);
    }

    res.status(404).send('Not Found');
  });
};
