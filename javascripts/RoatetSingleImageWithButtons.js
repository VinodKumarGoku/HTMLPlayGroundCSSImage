//var actual_image = document.getElementById("resize_button");


function resize_image(event) {
  var increase_image = document.getElementById("increase_imagesize");
  var decrease_image = document.getElementById("decrese_imagesize");

  if(!increase_image.style.display || increase_image.style.display == 'none')
  {
      increase_image.style.display = 'inline-block';
      decrease_image.style.display = 'inline-block';
  }
  else {
      increase_image.style.display = 'none';
      decrease_image.style.display = 'none';
  }
}

function increase_imagesize(event) {
  //console.log(actual_image.height + " and " + actual_image.height/0.9);
  actual_image.style.height = Math.ceil(actual_image.height/0.9).toString() + 'px';
  actual_image.style.width = Math.ceil(actual_image.width/0.9).toString() + 'px'
}

function decrease_imagesize(event) {
  //console.log(actual_image.height + " and " + actual_image.height/0.9);
  actual_image.style.height = Math.ceil(actual_image.height/1.1).toString() + 'px';
  actual_image.style.width = Math.ceil(actual_image.width/1.1).toString() + 'px'
}


var rotate_image_id;
var current_rotated_value = 0;
function activate_rotatebutton(image_id) {
  console.log("Image Button Rotate Activate " + image_id);
  rotate_image_id = image_id;
  var rotate_imageright = document.getElementById("rotate_buttonright");
  var rotate_imageleft = document.getElementById("rotate_buttonleft");

  if(!rotate_imageright.style.display || rotate_imageright.style.display == 'none')
  {
    rotate_imageright.style.display = 'inline-block';
    rotate_imageleft.style.display = 'inline-block';
  }
  else
  {
    rotate_imageright.style.display = 'none';
    rotate_imageleft.style.display = 'none';
  }
}

function rotate_right(event) {
  var rotate_image =  document.getElementById(rotate_image_id);
  //console.log(rotate_image + " and its id " + rotate_image_id);
  current_rotated_value = current_rotated_value + 5;
  if(current_rotated_value > 360)
  {
    current_rotated_value = 5;
  }
  var current_rotated_value_string = "rotate(" + current_rotated_value + 'deg)';
  //console.log(current_rotated_value_string);
  rotate_image.style.transform = current_rotated_value_string;
}

function rotate_left(event) {
  var rotate_image =  document.getElementById(rotate_image_id);
  console.log(current_rotated_value);
  current_rotated_value = current_rotated_value - 5;
  if(current_rotated_value < -360)
  {
    current_rotated_value = -5;
  }
  var current_rotated_value_string = "rotate(" + current_rotated_value + 'deg)';
  rotate_image.style.transform = current_rotated_value_string;
}
