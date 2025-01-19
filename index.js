import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ratesRoute from "./routes/ratesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api", ratesRoute);

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
