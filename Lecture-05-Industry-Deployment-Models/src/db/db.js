const mongoose = require("mongoose");



async function connectDB() {

    await mongoose.connect("mongodb+srv://para:pHzdO4GgjPM8s4fp@backend-men.9mpt2zt.mongodb.net/project-01");
    console.log("MongoDB connected");
    
}



module.exports = connectDB;
