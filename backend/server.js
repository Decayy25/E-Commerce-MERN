import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import https from "https";
import http from "http";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

// API routes
app.use("/api/products", productRoutes);

// Serve React Frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../frontend/build");
app.use(express.static(buildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const keyPath = path.join(__dirname, "key.pem");
const certPath = path.join(__dirname, ".pem");

const PORT = process.env.PORT || 8080;

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
  https.createServer(options, app).listen(PORT, () => {
    console.log(`✅ Secure server running at https://localhost:${PORT}`);
  });
} else {
  http.createServer(app).listen(PORT, () => {
    console.log(`⚠️  SSL certs not found — HTTP server running at http://localhost:${PORT}`);
  });
}