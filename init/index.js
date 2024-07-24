// // this file created to inserte file data
// const mongoose=require("mongoose");
// const initData=require("./data.js");    // ./" refers to the current directory.
// const Listing=require("../models/listing.js");    // ../" refers to the parent directory (one level up).-parent directory means major project and then it find hte file


// main()
// .then(() =>{
//     console.log("connected to  db");
// })
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');  // wanderlust is shown in mondodb
// };
// const initDB=async ()  =>{
//  await Listing.deleteMany({});
//  await Listing.insertMany(initData.data); // .data if form dta file the lat line
//  console.log("data was save");  

// };
// initDB();
const mongoose = require("mongoose");
const initData = require("./data.js"); // Adjust the path as necessary
const Listing = require("../models/listing.js"); // Adjust the path as necessary

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    console.log("Connected to db");
    await initDB();
  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    mongoose.connection.close(); // Close the connection after operations
  }
}

const initDB = async () => {
 
    await Listing.deleteMany({});
    initData.data.map((obj)=>({...obj,owner:"669fb61df7334d8e0d8ee494"}));  //map function jo inidiual object mai make new array not chnange in old array
    await Listing.insertMany(initData.data); // Make sure initData has a 'data' field
    console.log("Data was saved");
  } 
;

main();
