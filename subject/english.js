let express = require('express');
let router = express.Router();


router.use(function time(request, response, next) {
    console.log('時間:' + Date.now());
    next()
});

router.get('/', function (request, response) {
    response.send('英文課程空間');
});
router.get('/teach', function (request, response) {
    response.send(
        '<h1>教學影片</h1>' + '<br>' +
        '\n <img src=http://www.lhes.tp.edu.tw/~lhes/Construction.jpg>'
    );
});
module.exports = router;