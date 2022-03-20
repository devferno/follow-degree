const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/users");
require("dotenv").config();
const adminRoute = require("./routes/admin");
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/admin", adminRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("app runinng"));
