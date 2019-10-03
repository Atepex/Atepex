const mongoose = require("mongoose");

const SystemSettings = mongoose.model("systemSettings");

module.exports = app => {
  app.get("/api/settings/email", async (req, res) => {
    const settings = await SystemSettings.findOne({name: 'contact'})
    .catch(err =>{
      res.status(404).send('Not Found');
      return;
    });
    if (settings) {
      res.send(settings.value);
      return;
    }

  });

};
