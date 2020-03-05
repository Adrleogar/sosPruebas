const cool = require("cool-ascii-faces");
const express = require("express");

var app = express();

app.listen(80);

app.get("/cool", (request, response) => {
	response.send("<html>"+cool()+"</html>");
});

cool();

console.log(cool() + "     server ready");