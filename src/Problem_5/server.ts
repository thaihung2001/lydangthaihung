import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/database";
import resourceRoutes from "./routes/resource.routes";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// connect database
connectDB();

// Routes
app.use("/resources", resourceRoutes);

// Middleware 
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));