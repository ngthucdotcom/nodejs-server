var express = require("express");
var bodyParser = require("body-parser");
var moment = require("moment");
var router = express.Router();

app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", (req, res) => {
    const timer = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log({
        "received": timer,
        "agent": req.get('User-Agent')
    });
    res.json({
        "received": timer
    });
});

router.post("/api/logger", (req, res) => {
    // console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
    // console.log(req.body);
    // console.log(req.body.message);
    // res.json(req.body);
    const timer = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log({
        "received": timer,
        "agent": req.get('User-Agent'),
        "body": req.body
    });
    res.json({
        "received": timer
    });
});

app.use(router);

var server = app.listen(11111, function() {
    console.log('Server listening on port ' + server.address().port);
});

module.exports = app;
