"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

//Conexão com o banco de dados
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Carregamento dos Models
const Product = require("./models/product");
const Customer = require("./models/customer");

//Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
