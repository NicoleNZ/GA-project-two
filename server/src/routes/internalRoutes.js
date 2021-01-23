const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("You've come to the internal route");
});

router.get("/health", (request, response) => {
    response.send("Hi! Internal routes OK");
});

module.exports = router;