module.exports = app => {
    const urlController = require("../controllers/url.controller.js");
  
    var router = require("express").Router();
  
    // Create a new URL
    router.post("/api/url", urlController.create);

    // GET a  URL based on hash
    router.get("/api/url/:short", urlController.redirect);
  
    // todo: re-direct
    router.get("/:short", urlController.redirect);

    app.use('/', router);
  };