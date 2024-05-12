const mongoose = require("mongoose");
const { app } = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./env" });

const port = process.env.PORT || 8000;

mongoose
  .connect(`mongodb://${process.env.MONGO_HOST}:27017/users`)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server connected ${port}`);
});
