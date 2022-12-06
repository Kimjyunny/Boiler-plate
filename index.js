const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;

const mogoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jyunny:cjstkvy3365@boiler-plate.gbvjv2v.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
