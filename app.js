var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var urlencoded = require('url');
var bodyParse = require('body-parser');
var json = require('json');
var logger = require('logger');
var methodOverride = require('method-override');

var nano = require('nano')('http://localhost:5984/_utils/');
// connects to the DB

var dataBase = nano.server.db.use('address'); 
// specifies the dataBase with name address

var app = express();

//setting the port
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
// to create the ui engine 
app.set('view engine', 'jade');

// specifying what should be used in this app
app.use(bodyParse.json());
app.use(bodyParse.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// adding root location
app.get('/', routes.index);

// for creating a database functionality
app.post('/createdb', function(req, res){
    nano.server.db.create(req.body.dbname, function(err) {
        if (err) {
            res.send("Error creating dataBase " + req.body.dbname);
            console.log(err);
            return;
        }
        res.send("Database" + req.body.dbname + "created sucessfully"+ err);
    })
})

//code to add new contact
app.post('/new_contact', function(req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    // inserting to database with phone as key 
    dataBase.insert({name: name, phone: phone, crazy: true}, phone, function(err, body, header){
        if (err) {
            res.send("Error creating contact");
            console.log(err);
            return;
        }
        res.send("Contact created sucessfully");
    })
})

//code to view existing contact by number
app.post('/view_contact', function(req, res) {
    var alldoc = "Following are the contacts";
    dataBase.get(req.body.phone, {revs_info: true}, function(err, body) {
        if (!err) {
            console.log(body);
            console.log(err);
        }
        if (body) {
            alldoc += "Name: "+body.name+ "<br />Phone Number: "+body.phone;
        } else {
            alldoc = "No records found"
        }
        res.send(alldoc);
    })
})

// to delete contact by number
app.post('/delete_contact', function(req, res) {
    dataBase.get(req.body.phone, {revs_info: true}, function(err, body){
        if (!err) {
            dataBase.destroy(req.body.phone, body._rev, function(err, body) {
                if (err) {
                    res.send("Error occured while deleting the contact");
                    console.log(err);
                    return;
                }
                res.send("Contacts deleted sucessfully");
            })
        }
    })
})

// creating the server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port'+app.get('port'));
});