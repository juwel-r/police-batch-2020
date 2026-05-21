import mongoose from "mongoose";
import app from "./app";
import { envVar } from "./app/config/env.config";

const main = () => {
  try {
    mongoose.connect(envVar.DB_URL);
    console.log("DB Connected!");
    app.listen(envVar.PORT,() => {
      console.log(`Server is running on http://localhost:${envVar.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
main();
