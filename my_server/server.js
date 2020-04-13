const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var bodyParser = require("body-parser");

// Server Listening Port Value 
const port = 1804;

// Response Data JSon to send to client
var response_json_data = [];

// Middleware usage for express
app.use(express.static(path.join(__dirname, 'public')));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/html/CSSGridTryoutFunctionality.html')
})

app.get('/filelist',function(req,res){

  response_json_data = [];
  read_directory_recursively(path.join(__dirname,'public'), "");
  res.send(response_json_data);

})

app.get('/main_image_file_list', function(req,res){
  console.log("Main Categroy Image load request recived");
  
  response_json_data = [];
  read_directory_recursively(path.join(__dirname,'public'), "MainImage");
  //console.log(response_json_data);
  
  res.send(response_json_data);
})

app.get('/sub_category_image_file_list', function(req,res){
  console.log("SubCategory Image Load request recived");
  
  response_json_data = [];
  read_directory_recursively(path.join(__dirname,'public'), "");
  //console.log(response_json_data);
  res.send(response_json_data);
})

app.post('/save_image', function(req,res){
  var query1 = req.body.image_encodede_data;
  //console.log(req.body);
  
})

app.get('/canvas_data',function(req,res){
  res.sendFile(__dirname + '/html/TryOutClipping.html');
})

function read_directory_recursively(directoryPath, pattern_to_fetch) {

  var files = fs.readdirSync(directoryPath);
  
  files.forEach(function(file)
  {
    if(fs.lstatSync(directoryPath + '/' + file).isDirectory())
    {
      read_directory_recursively(directoryPath + '/' + file, pattern_to_fetch);
    }  
    if(fs.lstatSync(directoryPath + '/' + file).isFile())
    {
      var common_pattern_remove = 'C:\\Users\\svkumar\\github\\my_server\\public';
      if(pattern_to_fetch)
      {
        if(file.toString().match(/MainImage/g)) 
          response_json_data.push((directoryPath + '/' + file).replace(common_pattern_remove,''));
      }
      else
      { 
        if(!file.toString().match(/MainImage/g) && file.toString().match(/jpeg|jpg|png/g)) 
        response_json_data.push((directoryPath + '/' + file).replace(common_pattern_remove,''));
      }
    }
  });
}

// Node JS Server Listening on Designated Port
app.listen(port, function(req, res) {
  console.log("Server Started");
})





