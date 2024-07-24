require("dotenv").config();
// const app= require("./../app")
// const cors = require("cors");
// {cors()};
const bodyParser = require("body-parser");
bodyParser.json();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

exports.news = async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const UserPrompt = req.body.input;
    console.log(req.body.input);
    const result = await model.generateContent(UserPrompt || req.body.input);
    const response = await result.response;
    const text = response.text();
    console.log("Result:" + " " + text);

    res.status(200).send(text);
  } catch ({name,message}) {
    
    console.log(message);
    res.status(404).json({
      status: name,
      message,
    });
  }
};
