const mongoose = require('mongoose');

const SubCatalogSchema = new mongoose.Schema({
    childOf: String,
    subCatalogName: String,
});

const subCatalogs = mongoose.model("SubCatalogs",SubCatalogSchema);

module.exports = subCatalogs;