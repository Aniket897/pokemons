import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL as string;

// const MONGO_URL = "mongodb://localhost:27017";

export const connectDB = async () => {
  mongoose
    .connect(MONGO_URL, {
      dbName: "pokemon-pivot",
    })
    .then(() => {
      console.log("mongoose connected");
    })
    .catch((error) => {
      console.log("failed to connect mongoose :", error);
    });
};

//dUKJCihFSk2JEtON
