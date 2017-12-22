var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Welcome!</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
    <p>To R.Yordanov Website</p>
  `);

    // /** My hacks */
    // var ip = req.ip;                          //getting user IP
    // var browser = req.headers['user-agent'];  //getting user Browser
    // console.log(ip, browser);                 //Print IP & Browser in console
});

module.exports = router;
