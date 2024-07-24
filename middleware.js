// module.exports.isLoggedIn=(req,res,next) =>{
//     if (!req.isAuthenticated()) {
//       req.session.redirectUrl=req.originalUrl;
//         req.flash("error", "You must be logged in to create a listing!");
//         return res.redirect("/login");
//       }
//       next();
// };


// module.exports.saveRedirectUrl=( req,res,next)=>{
//   if ( req.session.redirectUrl) {
//     res.local.redirectUrl=req.session.redirectUrl;  


//   };
//   next();
// };
// Middleware to check if the user is logged in
//  islogged is authentication is siginup and login

const Listing=require("./models/listing");

const Review = require('./models/review'); // Adjust the path as needed

const { listingSchema, reviewSchema } = require("./Schema.js");
  const ExpressError = require("./utils/ExpressError.js");

module.exports.isLoggedIn = (req, res, next) => {
  // console.log(req.path,"..",req.originalUrl)
  if (!req.isAuthenticated()) {
    req.session.redirectUrl=req.originalUrl;
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create a listing!");
    return res.redirect("/login");
  }
  next();
};

// Middleware to save redirect URL from session to local variables
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
    delete req.session.redirectUrl; // Optional: Clear the redirectUrl after use
  }
  next();
};


module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.curruser._id)) {
    req.flash("error", "You don't have permission to edit this listing.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id,reviewId } = req.params;
  let listing = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.curruser._id)) {
    req.flash("error", "You are not author of review.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};



// impoetant 
// req.session.redirectUrl = req.originalUrl;  go to path ->login->path redirect