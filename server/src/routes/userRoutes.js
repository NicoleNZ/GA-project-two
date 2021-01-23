const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("You've come to the user route");
});

router.get("/save-something-in-session", (request, response) => {
    request.session.testProperty = "testing that this string gets saved";
    response.send("OK");
});

router.post("/register", (request, response) => {
    const body = request.body;
    console.log("new user details: ", body);
    const passwordHash = bcrypt.hashSync(body.password, 10);
    console.log("Here's the password hash: ", passwordHash);

    const user = { username: body.username, password: passwordHash };
    console.log("hashed user details: ", user);

    UserModel.create(user).then((userData) => {
        response.send(userData);
    });
});

router.post("/login", (request, response) => {
    UserModel.findOne({ username: request.body.username }).then((userData) => {
        if (userData) {
            const checkPasswordHash = bcrypt.compareSync(request.body.password, userData.password);
            if (checkPasswordHash) {
                console.log("request.session: ", request.session);
                request.session.user = {
                    id: userData._id,
                };
                console.log("request.session: ", request.session);
                response.send("Login successful");    
            } else {
                response.status(401).send("Wrong password - try again!");
            }
        } else {
            response.status(401).send("Wrong username - try again!");
        }
    })
});

router.get("/logout", (request, response) => {
    request.session.loggedIn = false;
    response.send("User has logged out!");
});

router.get("/expire-session", (request, response) => {
    request.session.destroy(() => response.send("OK"));
});

module.exports = router;