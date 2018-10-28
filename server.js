var express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
	flash  = require('connect-flash'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    configDB = require('./config/database.js')

mongoose.connect(configDB.url, function(err, data) {
    console.log("Mongoose Connection Status " + mongoose.connection.readyState)
})

app.use(cookieParser());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.use(bodyparser.raw())
app.use(bodyparser.text({ type: 'text/html' }))

app.set('view engine', 'ejs');

app.use(session({
    secret: 'codingisawesome'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

require('./app/routes.js')(app, passport);

app.use("/css", express.static(__dirname + "/client/css"))
app.use("/images", express.static(__dirname + "/client/images"))
app.use("/js", express.static(__dirname + "/client/js"))
app.use("/partials", express.static(__dirname + "/client/views/partials"))
app.use("/services", express.static(__dirname + "/client/services"))
app.use("/data", express.static(__dirname + "/client/data"))
app.use("/uploads", express.static(__dirname + "/uploads"))
app.use("/directives", express.static(__dirname + "/client/directives"))


app.listen(3000)