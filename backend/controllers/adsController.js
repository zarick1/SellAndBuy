const mongoose = require('mongoose');
const qs = require('qs');
const Ad = require('../models/adsModel');
const AppError = require('../utils/appError');

exports.getAllAds = async (req, res, next) => {
  try {
    const queryObj = { ...qs.parse(req._parsedUrl.query) };

    // filter
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = Ad.find(JSON.parse(queryStr));

    // sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('_id');
    }

    // filed limit
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // pagination
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 100;

    query = query.skip((page - 1) * limit).limit(limit);

    const ads = await query;

    res.status(200).json({
      status: 'success',
      results: ads.length,
      data: {
        ads,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
    });
  }
};

exports.getAd = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(new AppError('Invalid ID format', 400));
    }

    const ad = await Ad.findById(req.params.id);

    if (!ad) return next(new AppError('No ad found with that ID', 404));

    res.status(200).json({
      status: 'success',
      data: {
        ad,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      error: err.message,
    });
  }
};

exports.createAd = async (req, res, next) => {
  try {
    const newAd = await Ad.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      status: 'success',
      data: {
        ad: newAd,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
    });
  }
};

exports.updateAd = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(new AppError('Invalid ID format', 400));
    }

    const ad = await Ad.findById(req.params.id);

    if (!ad) return next(new AppError('No ad found with that ID', 404));

    if (ad.user._id.toString() !== req.user._id.toString())
      return next(
        new AppError('You do not have permission to edit this ad', 403)
      );

    const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        updatedAd,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      error: err.message,
    });
  }
};

exports.deleteAd = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(new AppError('Invalid ID format', 400));
    }

    const ad = await Ad.findById(req.params.id);

    if (!ad) return next(new AppError('No ad found with that ID', 404));

    if (ad.user._id.toString() !== req.user._id.toString())
      return next(
        new AppError('You do not have permission to edit this ad', 403)
      );

    await Ad.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      error: err.message,
    });
  }
};

exports.getMyAds = async (req, res, next) => {
  try {
    const ads = await Ad.find({ user: req.user._id });

    res.status(200).json({
      status: 'success',
      results: ads.length,
      data: {
        ads,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      error: err.message,
    });
  }
};
