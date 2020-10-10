let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let Subject_router = require('./subject/router.js');

app.get("/", function (request, response) {
    response.send("高中職各科教學資訊(要到支線請填subject)");
})
app.use("/subject", Subject_router);
app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});