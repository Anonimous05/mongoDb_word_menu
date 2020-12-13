const express = require('express');
const SubCatalogs = require('../Models/Subcatalogs');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
       const subCatalogs = await SubCatalogs.find();
        res.send(subCatalogs);
   } catch (e) {
       res.status(400).send(e);
   }
});

module.exports = router;