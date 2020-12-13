const express = require('express');
const Catalogs = require('../Models/Catalogs');
const router = express.Router();

router.get('/', async (req, res) => {
   try  {
       const catalogs = await Catalogs.find();
       res.send(catalogs);
   }  catch (e) {
      res.status(400).send(e);
   }
});

module.exports = router;