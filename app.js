const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const hbs = require("hbs");


app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partial");

app.get("/", function(request, response){ 
    response.render("index", {
        button_name: "submit"
    })
});
app.use('/', bodyParser.urlencoded({
    extended: true
}));

app.post("/", function(request, response){ 
    response.send("Form sent!");
    console.dir(request.body);
});

app.get("/Russia", function(request, response){ 
    response.render("Russia");
});

app.get("/Algeria", function(request, response){ 
    response.render("Algeria");
});  

app.listen(3000, function(){
    console.log("3000");
});
