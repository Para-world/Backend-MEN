//server create using express

const express = require("express");

const app = express();

app.use(express.json()); //ak middle ware hota hai jo request ko parse karta hai
//agar hum isko use nahi karege to req.body undefined aayega kuke express by default body a data ko read nahi kar sakta

const notes = [];
//post  notes
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({ message: "Note created successfully" });  //status code 201 ka mtlb hai ki request successful hai
})

module.exports = app;