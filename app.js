// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
    console.log("World!!");
})



app.listen(process.env.PORT || 3000);
