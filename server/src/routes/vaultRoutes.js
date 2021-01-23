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

router.patch("/update-product/:id", (request, response) => {
    console.log("You're updating id: " + request.params.id);
    VaultApi.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then((data) => {
            response.json(data);
            console.log(data);
            console.log(request.params.id + " has successfully been updated!");
        })
    .catch(() => {
        response.status(404).send("Sorry - there doesn't appear to be a product by that id.  Want to try again?");
    });
});

module.exports = router;