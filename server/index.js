import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const genAI = new GoogleGenerativeAI("AIzaSyChWfbu6oUeC7rHkHx7k2J8b6yTNHBKveo");

app.use(cors());
app.use(express.json());

async function run(questionedData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = questionedData;
    const result = await model.generateContentStream(prompt);
    let text = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;
    }
    return text;
  } catch (error) {
    return "something error occurred";
  }
}

app.post("/api", async (req, res) => {
  try {
    const { searchText } = req.body;
    const resData = await run(searchText);
    res.json({
      message: resData,
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
});
app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});
