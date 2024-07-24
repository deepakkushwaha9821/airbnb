// // const mongoose= require("mongoose");
// // const { schema } = require("./listing");
// // const Schema=mongoose.Schema;
// // const reviewSchema=new Schema({
// //     comment:String,
// //     rating:{
// //         type:Number,
// //         min:1,
// //         max:5,
// //     },
// //     createdAt:{
// //         type:Date,
// //         default:Date.now(),
// //     },
// // });
// // module.exports=mongoose.model("Reveiw",reviewSchema);


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   comment: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Review", reviewSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Corrected to use Date.now as a function
  },
  author:{
  type:Schema.Types.ObjectId,
  ref:"User"
}
});

module.exports = mongoose.model("Review", reviewSchema); // Corrected model name
