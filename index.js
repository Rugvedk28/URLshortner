const express = require("express");
const {} = require("./connect");
const urlRouter = require("./routes/url");
const cors = require("cors");
const connectToMongoDB = require("./routes/connect");
const app = express();
const port = 8001;

connectToMongoDB('mongodb://localhost:27017/urlShortner');
app.use("/url", urlRoute);
app.listen(port, () => console.log("Server running on port " + port));