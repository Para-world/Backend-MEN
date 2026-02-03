const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://para:pHzdO4GgjPM8s4fp@backend-men.9mpt2zt.mongodb.net/Backend-MEN");

    console.log("Database connected successfully");
}

module.exports = connectDB;


