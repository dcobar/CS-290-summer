//Declare variable

var express = require("express");

//Declare variable

var bodyParser = require("body-parser");

//Declare variable

var app = express();

//Declare variable

var port = 3000;

//Declare variable

var options = { root: __dirname + '/'}

//Set port

app.set('port', port);

//Configure express

app.use(bodyParser.urlencoded({ extended: false }));

//Use json

app.use(bodyParser.json());

//Define function

app.use(function(req, res, next)

{

    //Display message

    console.log('url: %s\n\t%s :: %s', req.url, req.method, req.path);

   

    //Display message

    console.log('body: ', req.body)

   

    //Next

    next();

});

//Define get

app.get('/form', function(req, res)

{

    //Define type

    res.type('text/html');

   

    //Define sendFile()

    res.sendFile('form.html', options);

});

//Define function

var getObjectBreakdown = function(object)

{

    //Declare variable

    var list = '<ul>';

   //Loop until end

    for (var key in object)

    {

       //Set parameters

        list += '<li><strong style="font-family: monospace;">' + key + '</strong>: ' + object[key] + '</li>';

    }

    //Return

    return list + '</ul>';

}

//Call function

var getRequestTable = function(req)

{

}

//Get

app.get('/', function(req, res)

{

    //Declare variable

    var html = '<h1>GET Request Received</h1>';

   

    //Set table

    html += '<table><tbody><tr>';

   

    //Set url

    html += '<td>url: ' + req.url + '</td>';

   

    //Set body

    html += '<td>body: ' + getObjectBreakdown(req.body) + '</td>';

   

    //End

    html += '</tr></tbody></table>';

    //Send request

    res.send(html);

});

//Post

app.post('/', function(req, res)

{

    //Declare variable

    var html = '<h1>POST Request Received</h1>';

   

    //Set table

    html += '<table><tbody><tr>';

   

    //Set url

    html += '<td>url: ' + req.url + '</td>';

   

    //Set body

html += '<td>body: ' + getObjectBreakdown(req.body) + '</td>';

   

    //End

    html += '</tr></tbody></table>';

    //Send request

    res.send(html);

});

//Listen

app.listen(port, function()

{

    //Display message

    console.log("• Started on port " + port);

});