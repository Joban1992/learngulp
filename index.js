var express=require("express");
var app = express();
app.use(express.static(__dirname+"/build"));
app.get("*",function(req,res) {
req.sendfile("./build/index.html");
});
var port = process.env.PORT|9000
app.listen(port);