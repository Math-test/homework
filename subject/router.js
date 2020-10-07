let express = require('express');
let router = express.Router();
let chinese = require("./chinese.js");
let english = require("./english.js");
let math = require("./math.js");
router.get('/', function (request, response) {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    response.sendFile("index.html", options)
});
router.use("/chinese", chinese);
router.use("/english", english);
router.use("/math", math);
module.exports = router;