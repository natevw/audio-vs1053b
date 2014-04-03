var tessel = require('tessel');
var fs = require('fs');
var audio = require('./').use(tessel.port('a'));

audio.on('ready', function() {
  console.log("Ready to go!");
  var song = fs.readFileSync('/app/sample.mp3');
  audio.play(song);
});

audio.on('error', function(err) {
  console.log("Failed to connect", err);
})
