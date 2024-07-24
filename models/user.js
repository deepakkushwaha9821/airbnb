// const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true  // Ensure email is unique
//   }
// });

// userSchema.plugin(passportLocalMongoose);
// // This above line can automatically implement hashing, salting, and adding a username

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
    lowercase: true, // Convert email to lowercase to ensure uniqueness is case-insensitive
    trim: true, // Remove extra spaces from email
  }
});

// Add the passport-local-mongoose plugin to handle username, password hashing, and salting
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email' // Use email as the username field
});

module.exports = mongoose.model("User", userSchema);
