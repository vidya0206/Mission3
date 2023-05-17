const express = require("express");
const carValueRouter = require("./routes/carValue");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", carValueRouter);
const Port = 3000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
