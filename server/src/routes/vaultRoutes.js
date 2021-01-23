const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("You've come to the vault route");
});

router.get("/health", (request, response) => {
    response.send("Hi! Vault routes OK");
});



module.exports = router;