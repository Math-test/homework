let express = require('express');
let router = express.Router();


router.use(function time(request, response, next) {
    console.log('時間:' + Date.now());
    next()
});

router.get('/', function (request, response) {
    response.send('國文課程空間(要到支線請填teach)');
});
router.get('/teach', function (request, response) {
    response.send(
        '<h1>教學影片</h1>' + '<br>' +
        '\n <img src=http://www.teandar.com/images/error.png>'
    );
});
module.exports = router;