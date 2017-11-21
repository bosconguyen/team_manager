
// require express
let express = require('express');
// require path module
let path = require('path');
// create the express app
let app = express();
// require body-parser to receive post data from clients
let bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
	res.sendfile(path.resolve("./public/dist/index.html"))
});


app.all("*", (req,res,next) => {
	res.sendfile(path.resolve("./public/dist/index.html"))
});


app.listen(8000, ()=>{
	console.log("on port 8000");
})
