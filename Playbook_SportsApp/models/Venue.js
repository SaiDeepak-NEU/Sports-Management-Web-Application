const mongoose = require("mongoose");
// const geocoder = require("../config/geocoder");

const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  nameofvenue: {
    type: String,
    required: true,
  },
  typeofsport: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  imgurl: {
    type: String,
  },
});

module.exports = Event = mongoose.model("venue", VenueSchema);
