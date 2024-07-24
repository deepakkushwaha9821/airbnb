// // const mongoose = require("mongoose");
// // const User=require("./user.js");

// // const Schema = mongoose.Schema;
// // // const Review=require("./review.js");



// // const listingSchema = new Schema({
// //   title: {
// //     type: String,
// //     required: true,
// //   }, 
// //   description: String,
// //   image: {
// //     type: String,
// //     default:
// //       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     set: (v) =>
// //       v === ""
// //         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
// //         : v,
// //   },
// //   price: Number,
// //   location: String,
// //   country: String,
// //   review:[{
// //     type:Schema.Types.ObjectId,
// //     ref:"Reveiw",
// //   },
// //   ],
// //    owner :[{

   
// //     type:Schema.Types.ObjectId,
// //     ref:"User",
// // }]
  
// // });
// // listingSchema.post("find0neAndDelete",async(listing)=>{
// //   if(listing){
// //     await Review.deleteMany({_id:{$in:listing.reviews}});
// //   }
  
// // }); 

// // module.exports = mongoose.model('Listing', listingSchema);
// // module.exports = Listing;


// const mongoose = require("mongoose");
// const User = require("./user.js");

// const Schema = mongoose.Schema;
// // Ensure Review is defined properly if needed
// const Review = require("./review.js");

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default:
//       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     set: (v) =>
//       v === ""
//         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//         : v,
//   },
//   price: Number,
//   location: String,
//   country: String,
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review", // Correct the spelling here
//     },
//   ],
//   owner: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
// });

// listingSchema.post("findOneAndDelete", async (listing) => {
//   if (listing) {
//     await Review.deleteMany({ _id: { $in: listing.reviews } });
//   }
// });

// module.exports = mongoose.model("Listing", listingSchema);
const mongoose = require("mongoose");
const User = require("./user.js");
const Review = require("./review.js");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review", // Corrected spelling
    },
  ],
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);
