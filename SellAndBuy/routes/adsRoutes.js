const express = require('express');
const adsController = require('../controllers/adsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/getAllAds').get(adsController.getAllAds);

router.route('/get-ad/:id').get(authController.protect, adsController.getAd);

// Protected routes
router.route('/my-ads').get(authController.protect, adsController.getMyAds);

router.route('/post').post(authController.protect, adsController.createAd);

router
  .route('/edit-ad/:id')
  .patch(authController.protect, adsController.updateAd);

router
  .route('/delete-ad/:id')
  .delete(authController.protect, adsController.deleteAd);

module.exports = router;
