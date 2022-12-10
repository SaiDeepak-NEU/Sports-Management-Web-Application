const express = require("express");
const router = express.Router();
const passport = require("passport");

const Venue = require("../../models/Venue");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const venueFields = {};

    if (req.body.nameofvenue) venueFields.nameofvenue = req.body.nameofvenue;
    if (req.body.typeofsport) venueFields.typeofsport = req.body.typeofsport;
    if (req.body.location) venueFields.location = req.body.location;
    if (req.body.description) venueFields.description = req.body.description;
    if (req.body.imgurl) venueFields.imgurl = req.body.imgurl;

    new Venue(venueFields).save().then((venue) => res.json(venue));
  }
);

router.get("/venues", (req, res) => {
  Venue.find(req.query.sport ? { typeofsport: req.query.sport } : {})
    .sort("-date")
    .populate("user", ["name"])
    .then((venues) => {
      res.json(venues);
    })
    .catch((err) =>
      res.status(404).json({ error: "Error in get api/venues/venues. " + err })
    );
});

module.exports = router;
