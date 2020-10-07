let express = require('express');
let router = express.Router();
router.use(express.static('./public'))

router.use(function time(request, response, next) {
    console.log('時間:' + Date.now());
    next()
});

router.get('/', function (request, response) {
    response.send(
        '數學課程空間' + '<br>' + '<a href="./Subject/math/teach">教學時刻</a>' +
        "<br>" + '<a href="/Subject/math/Math.html">題庫</a>'
    );
});
router.get('/teach', function (request, response) {
    response.send(
        '<h1>教學影片</h1>' + '<br>' +
        '\n <img src=http://static.medmeeting.org/Upload/user/149125/image/20191017/20191017072813_2111.jpg>'
    );
});
module.exports = router;