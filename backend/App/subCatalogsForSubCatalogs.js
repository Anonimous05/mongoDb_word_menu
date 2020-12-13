const express = require('express');
const SubCatalogsForSubCatalogs = require('../Models/SubCatalogsForSubCatalogs');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
       const subCatalogs3 = await SubCatalogsForSubCatalogs.find();
       res.send(subCatalogs3);
   } catch (e) {
       res.status(400).send(e);
   }
});

module.exports = router;