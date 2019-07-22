var log = require("json-log").log;

function refreshlog()
{
  x = 5;
  var currentTime = new Date()
  var currentyear = currentTime.getFullYear();
  log.info("hello world from " + currentTime);
  setTimeout(refreshlog, x*1000);

}

refreshlog();
