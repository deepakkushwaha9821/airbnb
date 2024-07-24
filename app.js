  // const express=require("express");
    // const router=express.Router({mergeParams:true}); that is my mistake for route
  // const app=express(  );
  // const mongoose=require("mongoose");
  // const Listing=require("./models/listing.js");  //.. se farak padta hai
  // const path= require("path");
  // const methodOverride = require("method-override"); //npm install method-override
  // //npm i ejs mate- it help to create mant templatesmeans layout
  // const   ejsmMate=require("ejs-mate");
  // const ExpressError=require("./utils/ExpressError.js");  
  // const session=require("express-session");
  // const flash=require("connect-flash");
  // const {listingSchema, reviewSchema}=require("./Schema.js");
  // const Review=require("./models/review.js");       
  // const wrapAsync = require('./utils/wrapAsync.js');

  // const passport= require("passport");
  // const LocalStrategy=require("passport-local");
  // const User= require("./models/user.js");
  // // Import routers
  // const userRouter = require('./routes/user.js');
  // const listings = require('./routes/listing.js');
  // const reviewRouter = require('./routes/review.js');
  // const { isLoggedIn } = require('./middleware.js');



  // main()
  // .then(() =>{

  //     console.log("connected to  db");
  // })
  // .catch(err => console.log(err));

  // async function main() {
  //   await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');  // wanderlust is shown in mondodb
  // }





  // // // Middleware function for validating listing data
  // // const validateListing = (req, res, next) => {
  // //   let { error } = listingSchema.validate(req.body);
  // //   if (error) {
  // //     let errMsg = error.details.map((el) => el.message).join(',');
  // //     throw new ExpressError(400, errMsg);
  // //   } else {
  // //     next();
  // //   }
  // // };



  // app.use(express.static(path.join(__dirname, "public")));                                                        //koi imsge serve karn aho or style serve kara ho   ya javascript ka logic severkarna ho
  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'ejs');

  // app.use(express.urlencoded  ({extended:true}));  // this is riting for show route that can help if the id come undestanderable by express
  // app.use(methodOverride("_method"));
  // app.engine("ejs", ejsmMate);


  // const sessionOptions = {
  //   secret: "mysupersecretcode",
  //   resave: false,
  //   saveUninitialized: true,
  //   cookie: {
  //     expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
  //     maxAge: 7 * 24 * 60 * 60 * 1000,
  //     httpOnly:true,
  //   },
  // };



  // app.get("/",(req,res) =>{
  //   res.send("hi, I am root");
  // });


  // // // Index Route
  // // app.get('/listings', wrapAsync(async (req, res) => {
  // //   const allListings = await Listing.find({});
  // //   res.render('listings/index.ejs', { allListings });
  // // }));

  // // // New Route
  // // app.get('/listings/new', isLoggedIn, (req, res) => {
  // //   console.log('req.user');
  // //   res.render('listings/new.ejs');
  // // });

  // // // Show Route
  // // app.get('/listings/:id', wrapAsync(async (req, res) => {
  // //   let { id } = req.params;
  // //   const listing = await Listing.findById(id).populate('reviews');
  // //   if (!listing) {
  // //     req.flash('error', 'Listing you requested for does not exist!');
  // //     res.redirect('/listings');
  // //   }
  // //   res.render('listings/show.ejs', { listing });
  // // }));

  // // // Create Route
  // // app.post('/listings', isLoggedIn, validateListing, wrapAsync(async (req, res) => {
  // //   const newListing = new Listing(req.body.listing);
  // //   await newListing.save();
  // //   req.flash('success', 'New Listing Created!');
  // //   res.redirect('/listings');
  // // }));

  // // // Edit Route
  // // app.get('/listings/:id/edit', isLoggedIn, wrapAsync(async (req, res) => {
  // //   let { id } = req.params;
  // //   const listing = await Listing.findById(id);
  // //   if (!listing) {
  // //     req.flash('error', 'Listing you requested for does not exist!');
  // //     res.redirect('/listings');
  // //   }
  // //   res.render('listings/edit.ejs', { listing });
  // // }));

  // // // Update Route
  // // app.put('/listings/:id', isLoggedIn, validateListing, wrapAsync(async (req, res) => {
  // //   let { id } = req.params;
  // //   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  // //   req.flash('success', 'New Listing Updated');
  // //   res.redirect(`/listings/${id}`);
  // // }));

  // // Delete Route
  // // app.delete('/listings/:id', isLoggedIn, wrapAsync(async (req, res) => {
  // //   let { id } = req.params;
  // //   let deletedListing = await Listing.findByIdAndDelete(id);
  // //   console.log(deletedListing);
  // //   req.flash('success', 'Listing Deleted!');
  // //   res.redirect('/listings');
  // // }));



  // app.use(session(sessionOptions));
  // // This line integrates the session middleware into the Express application
  // app.use(flash());


  // app.use(passport.initialize());
  // app.use(passport.session());
  // passport.use(new LocalStrategy(User.authenticate()));
  // passport.serializeUser(User.serializeUser());       
  // // that mean user ka data stored karna
  // passport.deserializeUser(User.deserializeUser());
  // // that mean user ka data stored nahi karna


  // app.use((req,res,next) =>{
  //   res.locals.success = req.flash("success");
  // res.locals.error = req.flash("error");

  //   res.locals.currUser =req.user;

  //   next();
  //   // res.locals.success = req.flash("error");: This retrieves the flash message with the key error and assigns it to res.locals.success. This makes the flash message available in the local variables of the response, which can be accessed in the template.
  // });



  // app.get("/registerUser", async (req, res) => {
  //   let fakeUser = new User({
  //     email: "student@gmail.com",
  //      username: "delta-student", // passport ne automtilly username bana diay we cant created usernaem in schema 
  //   });

  //   let newUser = await User.register(fakeUser, "helloworld");
  //   // above line  expalintion user ka register method use karnenge  1st parmeeter  is fakeuser and 2nd paramter is password helloworld there also third parameter it is callback register mehtod automatic check user is unique or not
  //   res.send(newUser);
  // });









  // const validateReview = (req, res, next) => {
  //   let { error } = reviewSchema.validate(req.body);
  //   if (error) {
  //     let errMsg = error.details.map((el) => el.message).join(",");
  //     throw new ExpressError(400, errMsg);
  //   } else {
  //     next();
  //   }
  // };

  // // Use routers
  // // app.use("/listings",listings);
  // app.use("/listings/:id/reviews", reviewRouter);
  // app.use("/", userRouter);

  // // app.get("/testListing",  async (req,res)=>
  // //     {let sampleListing= new Listing({           
  // //         title:"my new vila",                    
  // //         description:"by the beach",
  // //         price:1200,                                       
  // //         location:"calangute,Goa",                                                                                                                   
  // //         country:"India",
  // //     });
  // //     await sampleListing.save();
  // //     console.log("sample was saved");
  // //     res.send("successful testing");
  // // });


  // app.all("*",(req,res,next)=>{
  //   next(new ExpressError(404,"page not found")
  //   );
  // })

  // app.use((err, req, res, next) => {
  //   let { statusCode = 500, message = "Something went wrong" } = err;
  //   res.status(statusCode).render("error.ejs", { message });
  // });




  // app.listen(3000,()  =>{
  //     console.log("server is working");
  // })


  // let have variable- variable contain single value.  and new have instance=object-that can contain multiple values in the form of properties and methods.
  // for more  chat gpt what is differen between variable and object
  // dont put forward lash in frist place  in ".get" it is use in url and flodar


  const express = require("express");
  const router=express.Router({mergeParams:true}); 
  const mongoose = require("mongoose");
  const path = require("path");
  const methodOverride = require("method-override");
  const ejsMate = require("ejs-mate");
  const session = require("express-session");
  const flash = require("connect-flash");
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;

  
  // Import models and utilities
  const Listing = require("./models/listing.js");
  const Review = require("./models/review.js");
  const User = require("./models/user.js");
  const { listingSchema, reviewSchema } = require("./Schema.js");
  const ExpressError = require("./utils/ExpressError.js");
  const wrapAsync = require('./utils/wrapAsync.js');
  const { isLoggedIn,isOwner,isReviewAuthor } = require('./middleware.js');
  const { saveRedirectUrl }= require("./middleware.js");
  
  // Import routers
  const userRouter = require('./routes/user.js');
  // const reviewRouter = require('./routes/review.js');  // Ensure this router file exists
  
  const app = express();

  
  // Database connection
  async function main() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
      console.log("Connected to DB");
    } catch (err) {
      console.log(err);
    }
  }
  main();
  
  // Middleware setup
  app.use(express.static(path.join(__dirname, "public")));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.engine("ejs", ejsMate);
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
  
  const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  };
  app.use(session(sessionOptions));
  app.use(flash());
  
  // Passport configuration
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  
  // Flash messages and user info setup
  app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
  });
 
  // Routes
  app.get("/", (req, res) => {
    res.send("Hi, I am root");
  });
  
  // Middleware function for validating listing data
  const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
      const errMsg = error.details.map(el => el.message).join(',');
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
  };
  
  // Middleware function for validating review data
  const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      const errMsg = error.details.map(el => el.message).join(",");
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
  };
  
 // Listings Routes

// Display all listings
app.get("/listings", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

// Show form to create a new listing (only accessible to logged-in users)
app.get("/listings/new", isLoggedIn, (req, res) => {
  if(!req.isAuthenticated()){
    console.log(req.user);
    req.flash("error","you must be logged in  to create listing");
    return res.redirect("/login");  
  }
  res.render("listings/new.ejs");
});

// Handle form submission to create a new listing
app.post("/listings", isLoggedIn, validateListing, wrapAsync(async (req, res ,next) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner=req.user._id;
  await newListing.save();
  req.flash('success', 'New Listing Created!');
  res.redirect("/listings");
}));

// Display details of a specific listing by ID
app.get("/listings/:id", wrapAsync(async (req, res,) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate({path:'reviews',populate:{path:"author"},}).populate("owner");
  if (!listing) {
    req.flash('error', 'Listing you requested for does not exist!');
    return res.redirect('/listings');
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
}));

// Show form to edit a specific listing by ID (only accessible to logged-in users)
app.get("/listings/:id/edit", isLoggedIn,isOwner, wrapAsync(async (req, res,) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash('error', 'Listing you requested for does not exist!');
    return res.redirect('/listings');
  }
  res.render("listings/edit.ejs", { listing });
}));

// Handle form submission to update a specific listing by ID (only accessible to logged-in users)
app.put("/listings/:id", isLoggedIn,isOwner, validateListing, wrapAsync(async (req, res,) => {
  //isowner kya uuser ke pass permission hai upadte akne ka uske baad hum listing ko valide karnge
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash('success', 'Listing Updated');
  res.redirect(`/listings/${id}`);
}));

// Handle request to delete a specific listing by ID (only accessible to logged-in users)
app.delete("/listings/:id", isLoggedIn,isOwner, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash('success', 'Listing Deleted!');
  res.redirect("/listings");
}));
    
  // Reviews Routes
  app.post("/listings/:id/reviews", isLoggedIn, validateReview, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    newReview.author=req.user._id;
    console.log(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review created!");
    res.redirect(`/listings/${listing._id}`);
  }));
  
  app.delete("/listings/:id/reviews/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  }));
  
  // User Routes
  app.use("/", userRouter);
  
  // 404 handler
  app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
  });
  
  // // Error handler
  // app.use((err, req, res, next) => {
  //   const { statusCode = 500, message = "Something went wrong" } = err;
  //   res.status(statusCode).render("error.ejs", { message });
  // });
  app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { err: { message, trace: err.stack } });
  });
  
  
  // Start server
  app.listen(3000, () => {
    console.log("Server is listening on port 8080");
  });
  