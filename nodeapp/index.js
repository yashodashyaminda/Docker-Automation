var express = requir("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello, Welcome to Kalharcodes!!!"}');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
