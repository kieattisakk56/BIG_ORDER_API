module.exports = app => {
    const store = require("../controllers/store.controller.js");
    var router = require("express").Router();
    // Retrieve a single Tutorial with id
    router.post("/getCetegoryMenu/", store.findOne);
    app.use('/api/store', router);
};