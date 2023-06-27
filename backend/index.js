const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const app = express();
const routes = require("./routes/transactions");

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", routes);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
