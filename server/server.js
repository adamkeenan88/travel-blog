const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("./config/mongoose.config");
require("dotenv").config();

const port = 8000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
require("./routes/user.routes")(app);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.listen(port, () => console.log(`App listening on port ${port}`));
