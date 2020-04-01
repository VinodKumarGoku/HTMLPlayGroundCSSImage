
var optionimageslist = document.getElementsByClassName("commonimageblock");

var target_image = document.getElementsByClassName("mainimagearea");
target_image[0].addEventListener('drop',dropimage,true);
target_image[0].addEventListener('dragover',draggingover,true);

var image_number,topposition = '0';
for(image_number = 0;image_number < optionimageslist.length;image_number++ )
{
  optionimageslist[image_number].draggable = true;
  optionimageslist[image_number].addEventListener('dragstart',dragstarted);
  optionimageslist[image_number].addEventListener('mousemove',getcoordinates);
  //optionimageslist[image_number].addEventListener('ondblclick',display_sizing_buttons);
  optionimageslist[image_number].removeEventListener('drop',dropimage);
  optionimageslist[image_number].removeEventListener('dragover',draggingover);
}


// Resizing the Image aspects
var selected_image_for_scaling;
var rotate_image_id;
function display_sizing_buttons(event) {
  selected_image_for_scaling = event.target.id;
  rotate_image_id = event.target.id;
  //console.log("The selected element id is " + selected_image_for_scaling);
  var increase_image = document.getElementById("increase_imagesize");
  var decrease_image = document.getElementById("decrese_imagesize");
  var rotate_right_button = document.getElementById("rotate_buttonright");
  var rotate_left_button = document.getElementById("rotate_buttonleft");

  if(!increase_image.style.display || increase_image.style.display == 'none')
  {
      increase_image.style.display = 'inline-block';
      decrease_image.style.display = 'inline-block';
      rotate_right_button.style.display = 'inline-block';
      rotate_left_button.style.display = 'inline-block';
  }
  else {
      increase_image.style.display = 'none';
      decrease_image.style.display = 'none';
      rotate_right_button.style.display = 'none';
      rotate_left_button.style.display = 'none';
  }
}

function increase_imagesize(event) {
  //console.log(actual_image.height + " and " + actual_image.height/0.9);
  var actual_image = document.getElementById(selected_image_for_scaling);
  actual_image.style.height = Math.ceil(actual_image.height/0.9).toString() + 'px';
  actual_image.style.width = Math.ceil(actual_image.width/0.9).toString() + 'px'
}

function decrease_imagesize(event) {
  //console.log(actual_image.height + " and " + actual_image.height/0.9);
  var actual_image = document.getElementById(selected_image_for_scaling);
  actual_image.style.height = Math.ceil(actual_image.height/1.1).toString() + 'px';
  actual_image.style.width = Math.ceil(actual_image.width/1.1).toString() + 'px'
}

var clonenode,lastelemid,idcounter = 1;

function getcoordinates(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  //document.getElementById("demo").innerHTML = coor;
}

// Drag and Drop Functionality
function dragstarted(event) {
  //////console.log("Image Started at position x=" + event.clientX + " and y=" + event.clientY);
  //////console.log("The coordintes of offset are " + event.target.offsetLeft + " and " + event.target.offsetTop);
  var clonenodeset = false;

  if(event.target.parentNode.id == "mainimage")
  {
    lastelemid = event.target.id;
    //console.log("The last elem id is " + lastelemid);
  }
  var style = window.getComputedStyle(event.target, null);

  clonenode = event.target.cloneNode(true);

}

function dropimage(event) {

  event.stopPropagation();
  event.preventDefault();

  if(input_box_moved)
  {
    move_input_boxto_new_position(event);
    input_box_moved = false;
    return;
  }
  var prevclonenode = clonenode;

  clonenode.style.position = 'absolute';
  clonenode.style.left = (event.clientX - 80).toString() + 'px';
  clonenode.style.top = (event.clientY - 80).toString() + 'px';

  event.target.parentNode.appendChild(clonenode,event.target);
  clonenode.addEventListener('dragstart',dragstarted);
  clonenode.addEventListener('dblclick',display_sizing_buttons);

  //console.log("The clonable clone id " + clonenode.id);
  if(lastelemid != undefined && event.target.parentNode.id == "mainimage" && clonenode.id)
  {
    var deleteelement = document.getElementById(lastelemid.toString());
    event.target.parentNode.removeChild(deleteelement);
  }

  clonenode.id = idcounter;
  idcounter = idcounter + 1;
}

function draggingover(event) {
  ////////console.log("Imaged Hover at position x=" + event.clientX + " and y=" + event.clientY);
  event.preventDefault();

}


// Rotate Image section All Cod here
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
  //console.log(current_rotated_value);
  current_rotated_value = current_rotated_value - 5;
  if(current_rotated_value < -360)
  {
    current_rotated_value = -5;
  }
  var current_rotated_value_string = "rotate(" + current_rotated_value + 'deg)';
  rotate_image.style.transform = current_rotated_value_string;
}


// Input Box Drag Drop Rotate Insert All Functionality Here
function insert_inputbox(event) {
  var input_box = document.createElement("INPUT");
  input_box.setAttribute("type", "text");

  input_box
  var maindivtargetimage = document.getElementById("mainimage");
  maindivtargetimage.appendChild(input_box);
  input_box.draggable = true;
  input_box.id = input_box_id;
  input_box_id = input_box_id + 1;
  input_box.addEventListener('dragstart',inputbox_dragstarted);

}

var input_box_id = 1;
var input_box_moved = false, moving_inut_box_id;
var initial_position_input_elementx;
function inputbox_dragstarted(event) {
  console.log("Input Box Drag Started");
  input_box_moved = true;
  moving_inut_box_id = event.target.id;
  //initial_position_input_elementx =
}

function move_input_boxto_new_position(event) {
  console.log("Input Box can be moved to new position " + event.clientX + " and " + event.clientY);
  var moving_input_element = document.getElementById(moving_inut_box_id);
  moving_input_element.style.position = 'absolute';
  moving_input_element.style.top = (event.clientY).toString() + 'px';
  moving_input_element.style.left = (event.clientX).toString() + 'px';
  moving_input_element.style.background = 'transparent';
}
