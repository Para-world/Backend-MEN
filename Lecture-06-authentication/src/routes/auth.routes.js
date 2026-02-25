const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/register", authController.registerUser);

router.get("/test", (req, res) => {
    console.log("cookies:", req.cookies)
    res.json({
        message: "Cookies received successfully",
        cookies: req.cookies

    })
})


module.exports = router;