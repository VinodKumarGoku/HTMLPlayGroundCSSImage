const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var bodyParser = require("body-parser");
var mongoose = require('./javascripts/MongooseAPIConnection.js');

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

app.get('/main_image_file_list', async function(req,res){
  //console.log("Main Categroy Image load request recived");
  
  var response_json_data1 = [];
  //read_directory_recursively(path.join(__dirname,'public'), "MainImage");
  //console.log(response_json_data);
    await mongoose.get_data_from_main_target_image_collection('MainSectionOptions').then(main_target_image_db => {
      main_target_image_db.forEach(item => {
      response_json_data1.push(item);
      });
    });
  
  res.send(response_json_data1);
})

app.get('/sub_category_image_file_list', async function(req,res){
  //console.log("SubCategory Image Load request recived");
  
  var response_json_data2 = [];
  await mongoose.get_data_from_main_target_image_collection('SubSection').then(main_target_image_db => {
    main_target_image_db.forEach(item => {
      response_json_data2.push(item);
    });
  });
  //read_directory_recursively(path.join(__dirname,'public'), "");
  //console.log(response_json_data);
  res.send(response_json_data2);
})

app.get('/main_target_image', async function(req,res){
  //console.log("Main target Image Request Recived");
  
  var response_json_data3 = [];
  
  await mongoose.get_data_from_main_target_image_collection('MainTargetImage').then(main_target_image_db => {
                                                main_target_image_db.forEach(item => {
                                                  response_json_data3.push(item);
                                                });
                                              });
  //console.log("main_target_image " + response_json_data);
  
  res.send(response_json_data3);
})

// Fetching data from db based on Section Type
app.post('/fetch_image_location_from_db', async function(req,res) {
  response_json_data = [];
  console.log("Fetching image location data from server for image section " + req.body.image_section_name);
  
  await mongoose.get_data_from_main_target_image_collection(req.body.image_section_name)
                                              .then(main_target_image_db => {
                                                //console.log("In Server js script " + main_target_image_db);
                                                main_target_image_db.forEach(item => {
                                                response_json_data.push(item);
                                                });
                                              });
  res.send(response_json_data);
})

app.post('/save_image', function(req,res){
  console.log("Recieved post request");
  
  //var query1 = req.body.payload;
  console.log(req.body.payload);
  
})

app.get('/send_image_server',function(req,res){
  res.sendFile(__dirname + '/html/ImageDataSendTransfer.html');
})

app.get('/get_image_data',function(req,res){
  res.sendFile(__dirname + '/html/sample.html')
});

app.post('/save_image_location_db', function(req,res){
  console.log(req.body.image_location);
  res.send("200 Ok");
  mongoose.createenrty_picture(req.body.image_location);
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





