var express = require("express"),
	app     = express(),
    bodyParser = require("body-parser")
    
//=======SETTING Default App Config==========//

//setting view engine to ejs
app.set("view engine","ejs");
//serving custom resources
app.use(express.static(__dirname + '/public'));
//Including body-Parser for later use
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//===================ROUTES=================//
//HOMEPAGE
app.get("/",function(req,res){
    res.send("Hey There!");
});

//=================lISTENER PROCESS============//

var port = process.env.PORT || 31000
app.listen(port,process.env.IP,function(){
	console.log("Server started at port:"+port);
})