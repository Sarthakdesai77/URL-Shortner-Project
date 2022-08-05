
const express = require("express")
const route = express.Router();
const {createUrl, getUrl} = require("../controllers/urlController");



route.post("/url/shorten" , createUrl)                         //  API TO CREATE   SHORT   URL

route.get("/:urlCode" , getUrl)                               // API  TO  GET   URL  BY  URL-CODE


module.exports = route
