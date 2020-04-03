// Global Class and ID Command Static initialisations
const reduce_size_glyphicon = document.getElementById("reduce_size_glyphicon");
const increase_size_glyphicon = document.getElementById("increase_size_glyphicon");
const rotate_left_glyphicon = document.getElementById("rotate_left_glyphicon");
const rotate_right_glyphicon = document.getElementById("rotate_right_glyphicon");
const move_left_glyphicon = document.getElementById("move_left_glyphicon");
const move_right_glyphicon = document.getElementById("move_right_glyphicon");
const move_up_glyphicon = document.getElementById("move_up_glyphicon");
const move_down_glyphicon = document.getElementById("move_down_glyphicon");



// Make all elements with class option-image-class draggable
// Common declaration to enable event listeners, style
// properties to optional image elements

function initialize_properties_of_image_elements(event) {
  //console.log("Onload Initialised");
  // Initialising for optional images
  var optional_images = document.getElementsByClassName("option-image-class");
  var iterator;
  for(iterator = 0;iterator < optional_images.length;iterator++)
  {
    optional_images[iterator].draggable = 'true';
    optional_images[iterator].addEventListener('dragstart',option_image_drag_started);
  }

  // Initialising for main target images
  var main_target_image = document.getElementsByClassName("main-target-image");
  main_target_image[0].addEventListener('drop',drop_optional_image,true);
  main_target_image[0].addEventListener('dragover',drag_over_optional_image,true);

  // Initialising Gyphicons buttons with event listeners
  reduce_size_glyphicon.addEventListener('click',reduce_image_size,true);
  increase_size_glyphicon.addEventListener('click',increase_image_size,true);
  rotate_left_glyphicon.addEventListener('click',rotate_left_image,true);
  rotate_right_glyphicon.addEventListener('click',rotate_right_image,true);
  move_left_glyphicon.addEventListener('click',move_left_image,true);
  move_up_glyphicon.addEventListener('click',move_up_image,true);
  move_down_glyphicon.addEventListener('click',move_down_image,true);
  move_right_glyphicon.addEventListener('click',move_right_image,true);
}

// This function is called on the event of image drag has been started
var clonenode_option_image,lastelemid,idcounter = 1;

function option_image_drag_started(event) {
  //console.log("Ram1");
  clonenode_option_image = event.target.cloneNode(true);

  if(event.target.parentNode.id == "mainimage")
  {
    lastelemid = event.target.id;
  }
}

// This function is called when the dropping of element is done on target
function drop_optional_image(event) {
  //console.log("Ram2");
  event.preventDefault();

  var prevclonenode = clonenode_option_image;

  clonenode_option_image.style.position = 'absolute';
  clonenode_option_image.style.left = (event.clientX - 80).toString() + 'px';
  clonenode_option_image.style.top = (event.clientY - 80).toString() + 'px';

  event.target.parentNode.appendChild(clonenode_option_image,event.target);
  clonenode_option_image.addEventListener('dragstart',option_image_drag_started);

  if(lastelemid != undefined && event.target.parentNode.id == "mainimage" && clonenode_option_image.id)
  {
    var deleteelement = document.getElementById(lastelemid.toString());
    event.target.parentNode.removeChild(deleteelement);
  }

  clonenode_option_image.id = idcounter;
  idcounter = idcounter + 1;

}

// This function is called when image is being dragged over particular element
function drag_over_optional_image(event) {
  //console.log("Ram3");
  event.preventDefault();
}

// Reducing the size of the image placed on target
function reduce_image_size(event){
  event.preventDefault();
  console.log("Image Size Reduce Activated");
}

// Increasing the size of the image
function increase_image_size(event) {
  event.preventDefault();
  console.log("Image Size Increase Activated");
}

// Rotating the image towards the left
function rotate_left_image(event){
  event.preventDefault();
  console.log("Image Rotate Left Activated");
}

// Rotating the image towards the right
function rotate_right_image(event){
  event.preventDefault();
  console.log("Image Rotate Right Activated");
}

// Image to be moved towards left
function move_left_image(event){
  event.preventDefault();
  console.log("Image Moved Towards Left Activated");
}

// Image to be moved towards Up
function move_up_image(event){
  event.preventDefault();
  console.log("Image Moved Towards Up Activated");
}

// Image to moved towards down
function move_down_image(event){
  event.preventDefault();
  console.log("Image Moved Towards Down Activated");
}

// Image to moved towards right
function move_right_image(event){
  event.preventDefault();
  console.log("Image Moved Towards Right Activated");
}
