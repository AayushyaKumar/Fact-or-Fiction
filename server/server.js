const mongoose = require("mongoose");
const app = require("./app");
const cors = require("cors");

 app.use(cors());
require("dotenv").config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => {
    console.log("MONGODB connected successfully!👋");
  })
  .catch((error) => console.log(error));
// app.use;
app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
