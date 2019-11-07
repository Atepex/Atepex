const mongoose = require("mongoose");

const SystemSettings = mongoose.model("systemSettings");
const Images = mongoose.model('image')
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

  app.post("/api/addimage", async(req, res) => {
      const { url, type } = req.body;
      await new Images ({
        url,
        type
      }).save();
      res.send('Found');
      return;
  });

  app.get("/api/getimages", async(req, res) => {
      const images = await Images.find({});
      res.send(images);

  })

  app.post("/api/deleteimage", async(req, res) => {
    const { _id } = req.body;
    Images.deleteOne({ _id: _id }, function(err) {
      if (!err) {
        return res.status(200).send("successful");
      }

      return res.status(404);
    });
  })

  app.post("/api/modifyimage", async (req, res) => {
    const { _id, description } = req.body;
    Images.findOne({ _id: _id }, function(err, img) {
      if (!err) {
        img.description = description;
        img.save();
        return res.status(200).send("successful");
      }
    }).catch(err => {
      return res.status(err);
    });
    res.status(404);
  });

};
