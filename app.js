const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const route = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// app.use(route);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});
app.get("/todo", (req, res) => {
  res.status(200).json({
    data: [
      { id: 1, todo: "data1" },
      { id: 2, todo: "data2" },
    ],
  });
});

app.listen(3000, () => {
  console.log("Server is run");
});
