var Cart = require('../app/models/cartmodel');
var Order = require('../app/models/order');
var User = require('../app/models/user')
var userloyaltypoints = require('../app/models/userloyaltypoints')
var uniqid = require('uniqid')

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        let extension = file.mimetype.split("/")[1]
        var filename = req.user.loyaltytracker + "." + extension
      cb(null, filename)
    }
});
var upload = multer({storage: storage});


module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('login.ejs')
    })

    app.get("/signup", function(req, res) {
        res.render('signup.ejs')

    })


    app.get('/main', isLoggedIn, function(req, res) {
        let usercart = []
        Cart.findOne({
            "loyaltytracker": req.user.loyaltytracker
        }, function(err, data) {
            tracker = data.loyaltytracker
            details = data.cart
            userdetails = {
                'tracker': tracker,
                'details': details
            }
            res.render('main.ejs', {
                user: req.user.firstname + " " + req.user.lastname,
                uid: tracker,
                cart: details
            });

        })

    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }))

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/main',
        failureRedirect: '/',
        failureFlash: true
    }))

    app.post('/api/usercart', isLoggedIn, function(req, res) {

        let data = {
            "loyaltytracker": req.user.loyaltytracker,
            "cart": req.body
        }

        Cart.findOneAndUpdate({
            "loyaltytracker": req.user.loyaltytracker
        }, {
            $set: data
        }, function(err, doc) {
            if (err) throw err;
            res.json(doc)
        })
    })

    app.delete('/api/usercart', isLoggedIn, function(req, res) {

        let data = {
            "loyaltytracker": req.user.loyaltytracker,
            "cart": {
                "item": "0"
            }
        }

        Cart.findOneAndUpdate({
            "loyaltytracker": req.user.loyaltytracker
        }, {
            $set: data
        }, function(err, doc) {
            if (err) throw err;
            res.json(doc)
        })
    })

    app.post('/test',upload.single('file') , function(req,res,file){
        
        file = {
            "filepath" : req.file.filename
        }
        User.findOneAndUpdate({"loyaltytracker":req.user.loyaltytracker},{$set:file},{upsert:true},function(err,doc){
            res.send("success!")
        })

    })

    app.get('/api/userimage',isLoggedIn,function(req,res){
        User.findOne({"loyaltytracker":req.user.loyaltytracker},function(err,docs){
            if(err) throw err;
            if(docs.filepath){
                res.send([docs.filepath,docs.loyaltytracker,docs.email,docs.firstname,docs.lastname,docs.contact,docs.registertime])
            }
            else{
                res.send([null,docs.loyaltytracker,docs.email,docs.firstname,docs.lastname,docs.contact,docs.registertime])
            }
        })        
    })

    app.get('/api/userorders',function(req,res){
        Order.find({"loyaltytracker":req.user.loyaltytracker},function(err,docs){
            let orders = [], iterator = 0
            docs.forEach(function(data){
                orders.push(data.order)
                iterator++;
            })
            if(iterator==(docs.length)){
                res.send(orders)
            }
        })        
    })

    app.post('/api/order', isLoggedIn, function(req, res) {
        console.log(req.body[0])
        console.log(req.body[1])
        console.log(req.body[2])
        let orders = req.body[0],
            address = req.body[1]
            loyaltypoints = req.body[2]
        orders.forEach(function(data){
            order = new Order()
            order.loyaltytracker = req.user.loyaltytracker
            order.order = data
            order.address = address
            order.id = uniqid.time()
            order.save()
        })

        userloyaltypoints.findOneAndUpdate({
            "loyaltytracker": req.user.loyaltytracker
        }, {
            $set: {"loyaltytracker":req.user.loyaltytracker,"loyaltypoints":loyaltypoints}
        }, function(err, doc) {
            if (err) throw err;
            res.json(doc)
        })


    })

    app.get('/api/loyalty', function(req, res) {

        Order.find({
            "loyaltytracker": req.user.loyaltytracker
        }, function(err, doc) {
            res.json(doc.length)
        })
    })

    app.get('/api/userbonus',function(req,res){

        userloyaltypoints.find({"loyaltytracker":req.user.loyaltytracker},function(err,docs){
            res.json(docs[0].loyaltypoints)
        })

    })

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}