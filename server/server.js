const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const port = 8000;
const app = express();
require("./config/mongoose.config");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
require("./routes/user.routes")(app);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.listen(port, () => console.log(`App listening on port ${port}`));
