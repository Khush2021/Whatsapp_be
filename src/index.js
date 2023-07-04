import dotenv from "dotenv";
import app from "./app.js";

//dotenv config
dotenv.config();

//env variables
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
