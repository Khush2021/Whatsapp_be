import app from "./app.js";

//env variables
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
