const mongoose = require("mongoose");



async function connectDB() {

    await mongoose.connect(process.env.MOGO_URI);
    console.log("MongoDB connected");
    
}



module.exports = connectDB;
