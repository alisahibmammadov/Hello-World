const express = require("express");
const app = express();
const things = require("./things.js")

app.use("/things", things)


app.listen(3000);
