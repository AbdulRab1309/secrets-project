import express from "express";
import axios from "axios";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    const templatePath = path.join(__dirname, "../views/index.ejs");
    ejs.renderFile(templatePath, {
      secret: result.data.secret,
      user: result.data.username,
    }, (err, html) => {
      if (err) {
        console.error(err);
        res.status(500).send("Failed to render template");
      } else {
        res.send(html);
      }
    });
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).send("Failed to fetch secret");
  }
});

export default app;
