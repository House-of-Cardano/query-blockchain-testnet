// Contains the business logic for the API calls

const fs = require("fs");
const path = require("path");

const client = require("../util/cardano-db");

exports.getQuery = (req, res, next) => {
  res.json({
    query: [{ title: "First", content: "API Call" }],
  });
};

exports.simpleTransfer = (req, res, next) => {
  res.json({
    query: [{ title: "First", content: "API Call" }],
  });
};
