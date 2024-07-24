// const express =require("express");
// const router= express.Router();
// const User = require("../models/user.js");
// const wrapAsync = require("../utils/wrapAsync");
// const passport=require("passport");
// const { saveRedirectUrl } = require('../middleware.js'); // Adjust the path as needed

// router.get("/signup", (req, res) => {
//   res.render("users/signup.ejs");
// });
// // above line meaning is  page open by  /sign this url and render() in this file whatever it display on /signup age
   


// router.post("/signup", wrapAsync(async (req, res) => {
//     try {
//       let { username, email, password } = req.body;
//       const newUser = new User({ email, username });
//       const registeredUser = await User.register(newUser, password);
//       console.log(registeredUser);
//         req.login(registeredUser,(err)=>{
//           if (err ){
//             return nex(err);

//         } req.flash("success", "Welcome to Wanderlust!");
//         res.redirect("/listings");
//     })
      
//     } catch (e) {
//       req.flash("error", e.message);
//       res.redirect("/signup");
//     }
//   }));
  

// router.get("/login",(req,res) =>{
//     res.render("users/login.ejs")
// });



// router.get("/signup",(req,res) =>
//     {
//    res.render("user/signup.ejs");
// });




// router.post("/login",saveRedirectUrl, passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true
//   }), async (req, res) => {
//     req.flash("success", "Welcome back to Wanderlust!");
//     res.redirect(req.session.redirectUrl);
//   });
//   router.get("/logout", (req, res, next) => {
//     req.logout((err) => {
//       if (err) {
//         return next(err);
//       }
//       req.flash("success", "You are logged out!");
//       let redirectUrl=res.local.redirectUrl || "/listings";
//       res.redirect(redirectUrl);
//     });
//   });
  

// module.exports=router;
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require('../middleware.js'); // Adjust the path as needed

// Signup Routes
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs"); // Render signup page
});

router.post("/signup", wrapAsync(async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err); // Fixed typo from `nex` to `next`
      }
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
}));

// Login Routes
router.get("/login", (req, res) => {
  res.render("users/login.ejs"); // Render login page
});

router.post("/login", saveRedirectUrl, passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true
}), async (req, res) => {
  req.flash("success", "Welcome back to Wanderlust!");
  res.redirect(res.local.redirectUrl || "/listings"); // Redirect to saved URL or default
});

// Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    // req .logout is passport mehtod that have callback means iske immeditialy bad kay hona chiay
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings"); // Default redirect URL after logout
  });
});

module.exports = router;
