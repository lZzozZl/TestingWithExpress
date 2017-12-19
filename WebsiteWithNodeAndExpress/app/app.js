var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send(`
    <h1>Welcome!</h1>
    <p>To R.Yordanov Website</p>
  `);

    // /** My hacks */
    // var ip = req.ip;                          //getting user IP
    // var browser = req.headers['user-agent'];  //getting user Browser
    // console.log(ip, browser);                 //Print IP & Browser in console
});


  app.get('/speakers', function(req,res){
    var info = '';
    dataFile.speakers.forEach(function(item) {
      info += `
        <li>
          <h2>${item.name}</h2>
          <p>${item.summary}</p>
        </li>
      `;
    });
    res.send(`
      <h1>Roux Academy Meetups</h1>
      ${info}
    `);
  });

  app.get('/speakers/:speakerid', function(req,res){

    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
      <h1>${speaker.title}</h1>
      <h2>with ${speaker.name}</h2>
      <p>${speaker.summary}</p>
    `);
});

var server = app.listen(app.get('port'), function(){
  console.log('Listening on ' + app.get('port'));
});
