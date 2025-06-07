const express = require('express');
const adsController = require('../controllers/adsController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(authController.protect, adsController.createAd)
  .get(adsController.getAllAds);

router
  .route('/:id')
  .get(adsController.getAd)
  .patch(authController.protect, adsController.updateAd)
  .delete(authController.protect, adsController.deleteAd);

// router.get('/my-ads', authController.protect, adsController.getMyAds);

router.get('/my-ads', (req, res) => {
  res.send('My ads route hit!');
});

module.exports = router;
