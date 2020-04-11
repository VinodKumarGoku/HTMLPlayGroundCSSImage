const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var response_json_data = [];


app.use(express.static(path.join(__dirname, 'public')))

const port = 1804;

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/CSSGridTryoutFunctionality.html')
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
  console.log(response_json_data);
  
  res.send(response_json_data);
})

app.get('/sub_category_image_file_list', function(req,res){
  console.log("SubCategory Image Load request recived");
  
  response_json_data = [];
  read_directory_recursively(path.join(__dirname,'public'), "");
  console.log(response_json_data);
  res.send(response_json_data);
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


app.listen(port, function(req, res) {
  console.log("Server Started");
})

function read_contents_of_directory(directoryPath) {

  fs.readdirSync(directoryPath, function(err, files) {
    //handling error
    if (err) {
      //return console.log('Unable to scan directory: ' + err);
    }

    if (files) {
      //listing all files using forEach
      files.forEach(function(file) {
        // Do whatever you want to do with the file
        fs.statSync(path.join(directoryPath, file), function(err, stats) {
          
          var file_name_to_string = file.toString();
          if (stats.isFile() && file_name_to_string.match(/MainImage\.jpg/g))
          {
            //console.log(file + ' and its path is ' + directoryPath + '\\' + file);
            var common_pattern_remove = 'C:\\Users\\svkumar\\github\\my_server\\public';
            console.log((directoryPath + '\\' + file).replace(common_pattern_remove,''));
            response_json_data.push((directoryPath + '\\' + file).replace(common_pattern_remove,''));
            
          }
          //console.log(stats);
          if (stats.isDirectory())
            read_contents_of_directory(path.join(directoryPath, file));

        });
      });
      //console.log("Final json list " + response_json_data);
      
    }
  });
}




