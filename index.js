import express from "express";
import cors from "cors";
import maid from "./routes/random.js";

const app = express();

app.use(cors());
app.use("/api", maid);

app.get("/", (req, res) => {
    res.json({
        success: true
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("server is running at " + PORT);
})