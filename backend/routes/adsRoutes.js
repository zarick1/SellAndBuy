const express = require('express');
const adsController = require('../controllers/adsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/my-ads').get(authController.protect, adsController.getMyAds);

router
  .route('/')
  .post(authController.protect, adsController.createAd)
  .get(adsController.getAllAds);

router
  .route('/:id')
  .get(adsController.getAd)
  .patch(authController.protect, adsController.updateAd)
  .delete(authController.protect, adsController.deleteAd);

module.exports = router;
