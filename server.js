// jshint esversion:6

// Declaring variables
const express = require('express');
// const bodyParser = require('body-parser');

// Getting our constant app to use the express module, as well as utilizing app to
// us the bodyparser
const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

// Allowing Express to use out statis files such as our CSS
app.use(express.static(__dirname));


/** Note: Sending a path to the index.html file using a constant names "__dirname"
 *  which will always go to the specified path no matter which computer
 *  runs this file.
 */
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



/** Note: Sending a path to the bmiCalculator.html file using a constant names "__dirname"
 *  which will always go to the specified path no matter which computer
 *  runs this file.
 */
app.get("/chapters", function(req, res) {
  res.sendFile(__dirname + "/chapters.html");
});

// Handling any post requests once the 'submit' button is pressed
// app.post("/", function(req, res){
//   // res.send("Thanks for posting that!");
//
//   var num1 = Number(req.body.n1);
//   var num2 = Number(req.body.n2);
//   var result = num1 + num2;c
//   res.send("The result is " + result);
// });

// handling post requests after the submit button for bmi is clicked
// app.post("/bmiCalculator", function(req, res) {
//   var weight = parseFloat(req.body.w);
//   var height = parseFloat(req.body.h);
//   var bmi = (weight) /(height * height);
//
//   res.send("Your BMI is " + bmi);
// });

app.listen(3000, function() {
    console.log("Server has started on port 3000");
});
