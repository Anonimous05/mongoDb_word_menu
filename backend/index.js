const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();
const mongoose = require('mongoose');

const catalogs = require('./App/catalogs');
const subCatalogs = require('./App/subCatalogs');
const subCatalogsForSubCatalogs = require('./App/subCatalogsForSubCatalogs');
const ads = require('./App/ads');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const runDev = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    app.use('/categories',catalogs);
    app.use('/subCatalogs', subCatalogs);
    app.use('/subCatalog2', subCatalogsForSubCatalogs);
    app.use('/ads',ads);

    app.listen(config.port);
};

runDev().catch((e) => {
   console.log(e);
});