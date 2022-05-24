const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(express);
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.listen(port, () => console.log(`App listening on port ${port}`));
