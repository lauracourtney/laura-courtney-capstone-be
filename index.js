import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api", warehouseRoute, inventoryRoute);

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
