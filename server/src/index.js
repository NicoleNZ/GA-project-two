const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

mongoose.connect("mongodb://localhost:27017/masterDataVault", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const port = 4000;

const internalRouter = require("./routes/internalRoutes");
const userRouter = require("./routes/userRoutes");
const vaultRouter = require("./routes/vaultRoutes");

app.use(express.json());
app.use(cors());
app.use(
    session({
        secret: "secret vault",
        resave: false,
        saveUninitialized: false,
    })
);

app.use("/internal", internalRouter);
app.use("/api/vault", vaultRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});