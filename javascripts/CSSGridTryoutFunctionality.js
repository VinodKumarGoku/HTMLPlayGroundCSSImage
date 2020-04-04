// Global Class and ID Command Static initialisations
const reduce_size_glyphicon = document.getElementById("reduce_size_glyphicon");
const increase_size_glyphicon = document.getElementById("increase_size_glyphicon");
const rotate_left_glyphicon = document.getElementById("rotate_left_glyphicon");
const rotate_right_glyphicon = document.getElementById("rotate_right_glyphicon");
const move_left_glyphicon = document.getElementById("move_left_glyphicon");
const move_right_glyphicon = document.getElementById("move_right_glyphicon");
const move_up_glyphicon = document.getElementById("move_up_glyphicon");
const move_down_glyphicon = document.getElementById("move_down_glyphicon");
const delete_selected_item_glyphicon = document.getElementById("delete_selected_item");



// Make all elements with class option-image-class draggable
// Common declaration to enable event listeners, style
// properties to optional image elements

function initialize_properties_of_image_elements(event) {
  //console.log("Onload Initialised");
  // Initialising for optional images
  var optional_images = document.getElementsByClassName("option-image-class");
  var iterator;
  for (iterator = 0; iterator < optional_images.length; iterator++) {
    optional_images[iterator].draggable = 'true';
    optional_images[iterator].addEventListener('dragstart', option_image_drag_started);
    optional_images[iterator].addEventListener('dblclick', select_optional_image_draw_border);
  }

  // Initialising for main target images
  var main_target_image = document.getElementsByClassName("main-target-image");
  main_target_image[0].addEventListener('drop', drop_optional_image, true);
  main_target_image[0].addEventListener('dragover', drag_over_optional_image, true);

  // Initialising Gyphicons buttons with event listeners
  reduce_size_glyphicon.addEventListener('click', reduce_image_size, true);
  increase_size_glyphicon.addEventListener('click', increase_image_size, true);
  rotate_left_glyphicon.addEventListener('click', rotate_left_image, true);
  rotate_right_glyphicon.addEventListener('click', rotate_right_image, true);
  move_left_glyphicon.addEventListener('click', move_left_image, true);
  move_up_glyphicon.addEventListener('click', move_up_image, true);
  move_down_glyphicon.addEventListener('click', move_down_image, true);
  move_right_glyphicon.addEventListener('click', move_right_image, true);
  delete_selected_item_glyphicon.addEventListener('click', delete_selected_item, true);
}

// This function is called on the event of image drag has been started
var clonenode_option_image, last_selected_element_id, idcounter = 1;

function option_image_drag_started(event) {
  //console.log("Ram1");
  clonenode_option_image = event.target.cloneNode(true);

  if (event.target.parentNode.id == "mainimage") {
    last_selected_element_id = event.target.id;
  }
}

// This function is called when the dropping of element is done on target
function drop_optional_image(event) {
  //console.log("Ram2");
  event.preventDefault();

  var prevclonenode = clonenode_option_image;

  clonenode_option_image.style.position = 'absolute';
  clonenode_option_image.style.left = (event.clientX - 40).toString() + 'px';
  clonenode_option_image.style.top = (event.clientY - 40).toString() + 'px';

  event.target.parentNode.appendChild(clonenode_option_image, event.target);
  clonenode_option_image.addEventListener('dragstart', option_image_drag_started);
  clonenode_option_image.addEventListener('dblclick', select_optional_image_draw_border);

  // Section to handle drag and drop of image within the main image target
  if (last_selected_element_id != undefined && event.target.parentNode.id == "mainimage" && clonenode_option_image.id) {
    var deleteelement = document.getElementById(last_selected_element_id.toString());
    event.target.parentNode.removeChild(deleteelement);
  } else {
    clonenode_option_image.id = idcounter;
    idcounter = idcounter + 1;
  }

}

// This function is called when image is being dragged over particular element
function drag_over_optional_image(event) {
  //console.log("Ram3");
  event.preventDefault();
}

// Selecting the optional image on the target image whose parent is main mainimage
// and placing border ocross the same
var prev_selected_element_id = 0,
  current_selected_element_id = 1;

function select_optional_image_draw_border(event) {
  //console.log("Ram4 " + event.target.id);
  if (event.target.parentNode.id == "mainimage") {
    console.log("Image selected on target selected " + prev_selected_element_id + " and " + event.target.id);
    current_selected_element_id = event.target.id;
    if (current_selected_element_id != prev_selected_element_id) {
      if (prev_selected_element_id != 0) {
        var prev_selected_element = document.getElementById(prev_selected_element_id.toString());
        if (prev_selected_element) {
          prev_selected_element.style.border = 'none';
        }
      }

      prev_selected_element_id = current_selected_element_id;
      var current_selected_element = document.getElementById((event.target.id).toString());
      //console.log(current_selected_element);
      current_selected_element.style.border = '2px solid lightblue';
    }
  }
}

// Reducing the size of the image placed on target
function reduce_image_size(event) {
  event.preventDefault();
  console.log("Image Size Reduce Activated  for element " + current_selected_element_id);
  var current_selected_element = document.getElementById(current_selected_element_id.toString());

  try {
    current_selected_element.style.height = Math.ceil(current_selected_element.height / 1.1).toString() + 'px';
    current_selected_element.style.width = Math.ceil(current_selected_element.width / 1.1).toString() + 'px';
  } catch (error) {
    console.log(error.message + " and " + current_selected_element);
  }

}

// Increasing the size of the image
function increase_image_size(event) {
  event.preventDefault();
  console.log("Image Size Increase Activated for element " + current_selected_element_id);

  var current_selected_element = document.getElementById(current_selected_element_id.toString());

  try {
    console.log(current_selected_element.height + " and " + current_selected_element.height / 0.9);

    current_selected_element.style.height = Math.ceil(current_selected_element.height / 0.9).toString() + 'px';
    current_selected_element.style.width = Math.ceil(current_selected_element.width / 0.9).toString() + 'px';
  } catch (error) {
    console.log(error.message + " and " + current_selected_element);
  }
}

// Rotating the image towards the left
var current_rotated_value = {};
function rotate_right_image(event) {
  event.preventDefault();
  console.log("Image Rotate Right Activated");

  var current_selected_element = document.getElementById(current_selected_element_id.toString());

  var current_selected_element =  document.getElementById(current_selected_element_id);
  var imageid_to_degree_mapping = 'image' + current_selected_element_id;

  if(current_rotated_value[imageid_to_degree_mapping] == undefined)
  {
    current_rotated_value[imageid_to_degree_mapping] = 0;
  }
  current_rotated_value[imageid_to_degree_mapping] = current_rotated_value[imageid_to_degree_mapping] + 5;
  if(current_rotated_value[imageid_to_degree_mapping] > 360)
  {
    current_rotated_value[imageid_to_degree_mapping] = 5;
  }
  var current_rotated_value_string = "rotate(" + current_rotated_value[imageid_to_degree_mapping] + 'deg)';
  //console.log(current_rotated_value_string);
  current_selected_element.style.transform = current_rotated_value_string;

}

// Rotating the image towards the right
function rotate_left_image(event) {
  event.preventDefault();
  console.log("Image Rotate Left Activated");

  var current_selected_element = document.getElementById(current_selected_element_id.toString());

  var current_selected_element =  document.getElementById(current_selected_element_id);
  var imageid_to_degree_mapping = 'image' + current_selected_element_id;

  if(current_rotated_value[imageid_to_degree_mapping] == undefined)
  {
    current_rotated_value[imageid_to_degree_mapping] = 0;
  }
  current_rotated_value[imageid_to_degree_mapping] = current_rotated_value[imageid_to_degree_mapping] - 5;
  if(current_rotated_value[imageid_to_degree_mapping] < -360)
  {
    current_rotated_value[imageid_to_degree_mapping] = -5;
  }
  var current_rotated_value_string = "rotate(" + current_rotated_value[imageid_to_degree_mapping] + 'deg)';
  //console.log(current_rotated_value_string);
  current_selected_element.style.transform = current_rotated_value_string;
}

// Image to be moved towards left
function move_left_image(event) {
  event.preventDefault();
  console.log("Image Moved Towards Left Activated");
}

// Image to be moved towards Up
function move_up_image(event) {
  event.preventDefault();
  console.log("Image Moved Towards Up Activated");
}

// Image to moved towards down
function move_down_image(event) {
  event.preventDefault();
  console.log("Image Moved Towards Down Activated");
}

// Image to moved towards right
function move_right_image(event) {
  event.preventDefault();
  console.log("Image Moved Towards Right Activated");
}

// Deleting a selected item from the main target image
function delete_selected_item(event) {
  event.preventDefault();
  console.log("Element deleted from the section");

  try {
    var delete_element = document.getElementById(current_selected_element_id);
    delete_element.parentNode.removeChild(delete_element);
  } catch (error) {
    console.log(error.message);
  }
}
