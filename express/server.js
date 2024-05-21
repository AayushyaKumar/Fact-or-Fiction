const express = require("express");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
app.post("/news", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  console.log(req.body.inputText);
  const UserPrompt = req.body.inputText;

  const result = await model.generateContent(UserPrompt);
  const response = await result.response;
  const text = response.text();
  console.log("Result:" + " " + text);

  try {
    res.status(200).send(text);
  } catch (err) {
    // console.error(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
