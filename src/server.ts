import app from "./app";
import { envVar } from "./app/config/env.config";
import { connectDB } from "./app/config/db";

const main = async () => {
  try {
    await connectDB();

    console.log("DB Connected!");

    app.listen(envVar.PORT, () => {
      console.log(`Server is running on http://localhost:${envVar.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
