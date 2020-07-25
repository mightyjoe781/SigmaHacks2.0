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
    res.render("index");
});

//AMENITIES
app.get("/amenities",function(req,res){
	res.render("amenities");
});

//NEWS
app.get("/news",function(req,res){
	res.render("news1");
});

//FORMS ROUTE
app.get("/form_donor",function(req,res){
	res.render("form_donor");
});

app.get("/form_patient",function(req,res){
	res.render("form_patient");
});

//COMMON POOL
app.get("/common_pool",function(req,res){
	res.render("common_pool");
});

//PLASMA BANK
app.get("/plasma_bank",function(req,res){
	res.render("plasma_bank");
});

//=================lISTENER PROCESS============//

var port = process.env.PORT || 31000
app.listen(port,process.env.IP,function(){
	console.log("Server started at port:"+port);
})