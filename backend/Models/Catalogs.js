const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    catalogName: String,
});

const catalogs = mongoose.model("Text",textSchema);

module.exports = catalogs;