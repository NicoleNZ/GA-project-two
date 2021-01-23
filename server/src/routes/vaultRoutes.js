const express = require("express");
const VaultApi = require("../models/VaultModel");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("You've come to the vault route");
});

router.get("/health", (request, response) => {
    response.send("Hi! Vault routes OK");
});

router.get("/welcome", (request, response) => {
    VaultApi.find(request.body).then((data) => {
        console.log(data);
        response.send(data)
    });
});

router.post("/new-product", (request, response) => {
    VaultApi.create(request.body).then((data) => {
        console.log(data);
    });
    response.send("You've successfully created a new product!")
});

module.exports = router;