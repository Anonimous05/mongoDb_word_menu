const express = require('express');
const Ads = require('../Models/Ads');

const router = express.Router();

router.get('/', async (req,res) => {
   try {
       const ads = await Ads.find();
       res.send(ads);
   } catch (e) {
       res.status(400).send(e);
   }
});

module.exports = router;