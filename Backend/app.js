
const ENV = process.env.NODE_ENV || "development";
require("dotenv").config({
  path: `.env.${ENV}`,
});

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const sellerRouter = require("./routers/sellerRouter");
const authRouter = require("./routers/authRouter");
const { isLoggedIn, isSeller } = require("./middleware/auth");

const app = express();

const cors = require("cors");
//this means that the server will accept requests from any origin
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../Frontend/dist")));


const {errorHandlers} = require("./controllers/errorController");

const url = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@xdb.mjwzy.mongodb.net/${process.env.MONGO_DB_DATABASE}`;

//this is how you make images or uploads folder public to the world
app.use('/uploads',express.static('uploads'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request Recived");
  console.log(req.url);
  console.log("Req body",req.body);
  next();
});

app.use("/api/seller", isLoggedIn, isSeller, sellerRouter);
app.use("/api/auth", authRouter);
app.use(errorHandlers);

const port = process.env.PORT || 3000;


mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
});
