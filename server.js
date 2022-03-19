const express = require("express");
const app = express();
const userRoute = require("./routes/users");
require("dotenv").config();
const adminRoute = require("./routes/admin");

app.use(express.json());
app.use("/users", userRoute);
app.use("/admin", adminRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("app runinng"));
