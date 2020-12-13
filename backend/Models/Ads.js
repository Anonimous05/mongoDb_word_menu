const mongoose = require('mongoose');

const AdsSchema = new mongoose.Schema({
   childOf: String,
   adsName: String,
   adsPrice: Number,
   adsTitle: String,
});

const ads = mongoose.model("Ads",AdsSchema);

module.exports = ads;