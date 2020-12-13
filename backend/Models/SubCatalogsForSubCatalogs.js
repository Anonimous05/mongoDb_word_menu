const mongoose = require('mongoose');

const SubCatalogsForSubCatalogsSchema = new mongoose.Schema({
    childOf: String,
    subCatalogName3: String,
});

const forSubCatalog = mongoose.model("SubCatalogsForSubCatalogs",SubCatalogsForSubCatalogsSchema);

module.exports = forSubCatalog;