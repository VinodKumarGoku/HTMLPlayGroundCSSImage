var reduced_size_glyphicon;
var increase_size_glyphicon;
var rotate_left_glyphicon;
var rotate_right_glyphicon;
var move_left_glyphicon;
var move_right_glyphicon;
var move_up_glyphicon;
var move_down_glyphicon;
var delete_selected_item_glyphicon;
var resize_image_vertical_glyphicon;
var resize_image_horizontal_glyphicon;
var save_complete_design_glyphicon;

var div_contianer_id_to_url_mapping = [
        'main_category_div_element',
        'sub_category_image_file_list',
        'optinal_image_section',
        'main_target_image_conatiner'
      ];
var url_fetch_address = [
        '/main_image_file_list', 
        '/sub_category_image_file_list',
        '/sub_category_image_file_list',
        '/main_target_image'
      ];


// Make all elements with class option-image-class draggable
// Common declaration to enable event listeners, style
// properties to optional image elements

function initialize_properties_of_image_elements(event) {
  //console.log("Onload Initialised");

  initialisation_all_dyamic_content(event);

  // Initialising for optional images
  initialise_optional_images(event);

  // Initialising Gyphicons buttons with event listeners
  initialisation_glyphicons(event);

}

// Main Function to retrive and fill all dynamic content
function initialisation_all_dyamic_content(event) {
  console.log("Initailising All Dynamic Content From Server");

  retrieve_dynamic_content(event, div_contianer_id_to_url_mapping, url_fetch_address);
}


function initialisation_main_category_images(event) {
  console.log("initialisation_main_category_images");
  
  retrive_filelist(event,'main_category_div_element','/main_image_file_list');
  retrive_filelist(event,'sub_category_image_file_list','/sub_category_image_file_list');
}

function initialisation_sub_category_images(event){
  console.log("initialisation_sub_category_images");
  
  retrive_filelist(event,'sub_category_image_file_list','/sub_category_image_file_list');
}

// Refactored fucntion of onload initialisations
function initialise_optional_images(event) {

  var optinal_section_div_conatiner = document.getElementsByClassName('image-options-to-choose commonstyling');
  var inner_div_conatiner = optinal_section_div_conatiner[0].getElementsByClassName('inner-div-option-image');
  var sub_elemenst_inner_div = inner_div_conatiner[0].children;
  
  // Waiting Until Images are loaded
  if(sub_elemenst_inner_div.length == 0)
  {
    setTimeout(initialise_optional_images, 300);
  }

  var optional_images = document.getElementsByClassName('option-image-class');

  for (let iterator = 0; iterator < optional_images.length; iterator++) {
    optional_images[iterator].draggable = 'true';
    optional_images[iterator].addEventListener('dragstart', option_image_drag_started);
    optional_images[iterator].addEventListener('dblclick', select_optional_image_draw_border);
  }
}


function initialisation_glyphicons(event) {
  // Iniatilise the variables with element id
  initialise_glyphicon_elements(event);

  reduced_size_glyphicon.addEventListener('click', reduce_image_size, true);
  increase_size_glyphicon.addEventListener('click', increase_image_size, true);
  rotate_left_glyphicon.addEventListener('click', rotate_left_image, true);
  rotate_right_glyphicon.addEventListener('click', rotate_right_image, true);
  move_left_glyphicon.addEventListener('click', move_left_image, true);
  move_up_glyphicon.addEventListener('click', move_up_image, true);
  move_down_glyphicon.addEventListener('click', move_down_image, true);
  move_right_glyphicon.addEventListener('click', move_right_image, true);
  delete_selected_item_glyphicon.addEventListener('click', delete_selected_item, true);
  resize_image_vertical_glyphicon.addEventListener('click', resize_image_vertically, true);
  resize_image_horizontal_glyphicon.addEventListener('click', resize_image_horizontally, true);
  save_complete_design_glyphicon.addEventListener('click', save_completed_design, true);
}

function initialise_glyphicon_elements(event)
{
  var glyphicon_div_conatiner = document.getElementsByClassName('options-for-editing-the-image commonstyling');
  //console.log(glyphicon_div_conatiner[0].childNodes);
  
  if(glyphicon_div_conatiner[0].childNodes.length == 0)
  {
    setTimeout(initialise_glyphicon_elements,300);
  }
  
   reduced_size_glyphicon = document.getElementById("reduce_size_glyphicon");
   increase_size_glyphicon = document.getElementById("increase_size_glyphicon");
   rotate_left_glyphicon = document.getElementById("rotate_left_glyphicon");
   rotate_right_glyphicon = document.getElementById("rotate_right_glyphicon");
   move_left_glyphicon = document.getElementById("move_left_glyphicon");
   move_right_glyphicon = document.getElementById("move_right_glyphicon");
   move_up_glyphicon = document.getElementById("move_up_glyphicon");
   move_down_glyphicon = document.getElementById("move_down_glyphicon");
   delete_selected_item_glyphicon = document.getElementById("delete_selected_item");
   resize_image_vertical_glyphicon = document.getElementById("resize_image_vertical");
   resize_image_horizontal_glyphicon = document.getElementById("resize_image_horizontal");
   save_complete_design_glyphicon = document.getElementById("save_complete_design");
}

// All callback functions calling 
function reduce_image_size(event) {
  console.log("Ram1");
  
  image_operation_reduce_image_size(event);
}

function increase_image_size(event) {
  image_operation_increase_image_size(event);
}

function rotate_left_image(event) {
  image_operation_rotate_left_image(event);
}

function rotate_right_image(event) {
  image_operation_rotate_right_image(event);
}

function move_left_image(event) {
  image_operation_move_left_image(event);
}

function move_up_image(event) {
  image_operation_move_up_image(event);
}

function move_down_image(event) {
  image_operation_move_down_image(event);
}

function move_right_image(event) {
  image_operation_move_right_image(event);
}

function delete_selected_item(event) {
  image_operation_delete_selected_item(event);
}

function resize_image_vertically(event) {
  image_operation_resize_image_vertically(event);
}

function resize_image_horizontally(event) {
  image_operation_resize_image_horizontally(event);
}

function save_completed_design(event) {
  image_operation_save_completed_design(event);
}