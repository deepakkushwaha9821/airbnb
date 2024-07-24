// const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//       title: Joi.string().required(),
//       description: Joi.string().required(),
//       location: Joi.string().required(),
//       country: Joi.string().required(),
//       price: Joi.number().required().min(0),
//       image: Joi.string().allow("", null),
//     }).required(),
//   });


//   module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//       rating: Joi.number().required(). min(1).max(5),
//       comment: Joi.string().required(),
//     }).required(),
//   });
  
  
  
const Joi = require('joi');

// Schema for validating listing data
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(), // Title is required and should be a string
    description: Joi.string().required(), // Description is required and should be a string
    location: Joi.string().required(), // Location is required and should be a string
    country: Joi.string().required(), // Country is required and should be a string
    price: Joi.number().required().min(0), // Price is required, should be a number, and cannot be negative
    image: Joi.string().allow("", null), // Image can be an empty string or null
  }).required(),
});

// Schema for validating review data
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5), // Rating is required, should be a number between 1 and 5
    comment: Joi.string().required(), // Comment is required and should be a string
  }).required(),
});
