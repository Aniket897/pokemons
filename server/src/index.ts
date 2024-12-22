import express, { Response } from "express";
import cors from "cors";
import "dotenv/config";

// routes
import pokemonRouter from "./routes/pokemon";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 8080;
const app: express.Application = express();

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);

app.get("/health", (_, resp: Response) => {
  resp.status(200).json({
    message: "Server is up and running",
  });
});

app.use("/pokemons", pokemonRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running on port : ", PORT);
});
