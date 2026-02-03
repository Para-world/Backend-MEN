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

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "Notes fetched successfully",
        data: notes
    });
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app;