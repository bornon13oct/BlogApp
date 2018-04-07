var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    flash                   = require("connect-flash"),
    methodOverride          = require("method-override"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local");
    
mongoose.connect("mongodb://skay13oct:bornon13oct@ds237979.mlab.com:37979/cashpositive");

app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(require("express-session")({
    secret: "I love nodejs",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error     = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});
app.use(methodOverride("_method"));

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.post("/register", function(req, res) {
    User.register(new User({username: req.body.username, firstName: req.body.firstname, lastName: req.body.lastname, blogUrl: req.body.blogurl}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to BlogApp "+ user.username);
            res.redirect("/");
        });
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to that");
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("server has started");
});