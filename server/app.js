const express = require("express");
const app = express();
const router = require("./routes/user-routes");
const cors = require("cors");
app.use(cors());
app.use(express.json()); 
app.use((req, res, next) => {
  console.log(
    " Middleware has and access to the request object, responses object, and next, it can process the request before the server sends a response. 🧿"
  );
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/", router)
module.exports = app;
