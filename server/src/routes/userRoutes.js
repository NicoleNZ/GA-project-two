const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("You've come to the user route");
});



module.exports = router;