// This function is called on the event of image drag has been started
var clonenode_option_image, last_selected_element_id, idcounter = 1;

function option_image_drag_started(event) {
  
  clonenode_option_image = event.target.cloneNode(true);
  console.log("Image Drag Started " + clonenode_option_image);

  if (event.target.parentNode.id == "main_target_image_conatiner") {
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
  if (last_selected_element_id != undefined && 
          event.target.parentNode.id == "main_target_image_conatiner" && 
          clonenode_option_image.id) 
  {
    var deleteelement = document.getElementById(last_selected_element_id.toString());
    event.target.parentNode.removeChild(deleteelement);
  } 
  else 
  {
    clonenode_option_image.id = idcounter;
    idcounter = idcounter + 1;
  }

}

// This function is called when image is being dragged over particular element
function drag_over_optional_image(event) {
  //console.log("Ram3");
  event.preventDefault();
}

// Selecting the optional image on the target image whose parent is main main_target_image_conatiner
// and placing border ocross the same
var prev_selected_element_id = 0,
  current_selected_element_id = 1;

function select_optional_image_draw_border(event) {
  console.log("Ram4 " + event.target.id);
  if (event.target.parentNode.id == "main_target_image_conatiner") {
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
