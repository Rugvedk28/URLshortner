const express = require("express");
const cors = require("cors");
const app = express();
const port = 8001;
app.listen(port, () => console.log("Server running on port " + port));