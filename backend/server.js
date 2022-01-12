import express from "express";
import cors from "cors";
import restaurant from "./api/restaurants.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurant);
app.use("*", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

export default app;
