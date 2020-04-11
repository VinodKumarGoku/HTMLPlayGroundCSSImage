// Reducing the size of the image placed on target
function image_operation_reduce_image_size(event) {
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
  function image_operation_increase_image_size(event) {
    event.preventDefault();
    console.log("Image Size Increase Activated for element ");
  
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
  
  function image_operation_rotate_right_image(event) {
    event.preventDefault();
    console.log("Image Rotate Right Activated");
  
    var current_selected_element = document.getElementById(current_selected_element_id.toString());
  
    var current_selected_element = document.getElementById(current_selected_element_id);
    var imageid_to_degree_mapping = 'image' + current_selected_element_id;
  
    if (current_rotated_value[imageid_to_degree_mapping] == undefined) {
      current_rotated_value[imageid_to_degree_mapping] = 0;
    }
    current_rotated_value[imageid_to_degree_mapping] = current_rotated_value[imageid_to_degree_mapping] + 5;
    if (current_rotated_value[imageid_to_degree_mapping] > 360) {
      current_rotated_value[imageid_to_degree_mapping] = 5;
    }
    var current_rotated_value_string = "rotate(" + current_rotated_value[imageid_to_degree_mapping] + 'deg)';
    //console.log(current_rotated_value_string);
    current_selected_element.style.transform = current_rotated_value_string;
  
  }
  
  // Rotating the image towards the right
  function image_operation_rotate_left_image(event) {
    event.preventDefault();
    console.log("Image Rotate Left Activated");
  
    var current_selected_element = document.getElementById(current_selected_element_id.toString());
  
    var current_selected_element = document.getElementById(current_selected_element_id);
    var imageid_to_degree_mapping = 'image' + current_selected_element_id;
  
    if (current_rotated_value[imageid_to_degree_mapping] == undefined) {
      current_rotated_value[imageid_to_degree_mapping] = 0;
    }
    current_rotated_value[imageid_to_degree_mapping] = current_rotated_value[imageid_to_degree_mapping] - 5;
    if (current_rotated_value[imageid_to_degree_mapping] < -360) {
      current_rotated_value[imageid_to_degree_mapping] = -5;
    }
    var current_rotated_value_string = "rotate(" + current_rotated_value[imageid_to_degree_mapping] + 'deg)';
    //console.log(current_rotated_value_string);
    current_selected_element.style.transform = current_rotated_value_string;
  }
  
  // Image to be moved towards left
  function image_operation_move_left_image(event) {
    event.preventDefault();
    console.log("Image Moved Towards Left Activated");
  
    var current_selected_element = document.getElementById(current_selected_element_id);
  
    var current_element_coordinates = current_selected_element.getBoundingClientRect();
  
    if (current_element_coordinates.left > 10) {
      current_selected_element.style.left = (current_element_coordinates.left - 5).toString() + 'px';
    }
  
  }
  
  // Image to be moved towards Up
  function image_operation_move_up_image(event) {
    event.preventDefault();
    console.log("Image Moved Towards Up Activated");
  
    var current_selected_element = document.getElementById(current_selected_element_id);
  
    var current_element_coordinates = current_selected_element.getBoundingClientRect();
  
    console.log(current_element_coordinates.top + " and " + current_selected_element.style.top);
    if (current_element_coordinates.top > 10) {
      current_selected_element.style.top = (current_element_coordinates.top - 5).toString() + 'px';
    }
  }
  
  // Image to moved towards down
  function image_operation_move_down_image(event) {
    event.preventDefault();
    console.log("Image Moved Towards Down Activated");
  
  
    var current_selected_element = document.getElementById(current_selected_element_id);
  
    var current_element_coordinates = current_selected_element.getBoundingClientRect();
  
    if (current_element_coordinates.top < 500) {
      var improvement_counter = Math.ceil(current_element_coordinates.top) + 20;
      console.log(improvement_counter);
      current_selected_element.style.top = (improvement_counter).toString() + 'px';
      //improvement_counter = improvement_counter + 5;
    }
  }
  
  // Image to moved towards right
  function image_operation_move_right_image(event) {
    event.preventDefault();
    console.log("Image Moved Towards Right Activated");
  
    var current_selected_element = document.getElementById(current_selected_element_id);
  
    var current_element_coordinates = current_selected_element.getBoundingClientRect();
  
    if (current_element_coordinates.left < 500) {
      current_selected_element.style.left = (current_element_coordinates.left + 30).toString() + 'px';
    }
  }
  
  // Deleting a selected item from the main target image
  function image_operation_delete_selected_item(event) {
    event.preventDefault();
    console.log("Element deleted from the section");
  
    try {
      var delete_element = document.getElementById(current_selected_element_id);
      delete_element.parentNode.removeChild(delete_element);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  // Resizing the image vertically
  function image_operation_resize_image_vertically(event) {
    console.log("Resizing the image Vertically");
  
    var current_selected_element = document.getElementById(current_selected_element_id);
    current_selected_element.style.height = (current_selected_element.height + 10).toString() + 'px';
  }
  
  // Resizing image horizontally
  function image_operation_resize_image_horizontally(event) {
    console.log("Resing image Horizontally");
  
    var current_selected_element = document.getElementById(current_selected_element_id);
    current_selected_element.style.width = (current_selected_element.width + 10).toString() + 'px';
  }
  
  // Save the design and exit
  function image_operation_save_completed_design(event) {
    var current_selected_element = document.getElementById(current_selected_element_id);
    current_selected_element.style.border = 'none';
  }
  