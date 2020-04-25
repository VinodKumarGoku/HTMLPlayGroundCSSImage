
// Main image options sections properties contruction
function main_div_container_option_image_construction(image_object,div_element_id_to_append)
{
    // Modify the response by removing [] ""
    var modified_variable;
    modified_variable = image_object.toString().replace('[','');
    modified_variable = modified_variable.toString().replace(']','');

    // Create new image and create new properties for the same
    var image_to_append = new Image(100,100);
    image_to_append.src = modified_variable.toString().replace('"','').toString().replace('"','');
    image_to_append.alt = 'Image Not Found';
    image_to_append.style.margin = '2px';
    image_to_append.draggable = false;

    // Get the main category div element and appendchild to it
    main_category_div_element = document.getElementById(div_element_id_to_append);

    var new_div_element = document.createElement("div");
    new_div_element.style.display = 'inline-block';

    new_div_element.appendChild(image_to_append);
    main_category_div_element.appendChild(new_div_element);
}

// Sub Category image options sections properties contruction
function subcategory_image_section_properties_construction(image_object,div_element_id_to_append)
{
    // Modify the response by removing [] ""
    var modified_variable;
    modified_variable = image_object.toString().replace('[','');
    modified_variable = modified_variable.toString().replace(']','');

    // Create new image and create new properties for the same
    var image_to_append = new Image(100,100);
    image_to_append.src = modified_variable.toString().replace('"','').toString().replace('"','');
    image_to_append.alt = 'Image Not Found';
    image_to_append.style.margin = '2px';
    image_to_append.draggable = false;

    // Get the main category div element and appendchild to it
    main_category_div_element = document.getElementById(div_element_id_to_append);

    var new_div_element = document.createElement("div");
    new_div_element.style.display = 'inline-block';

    new_div_element.appendChild(image_to_append);
    main_category_div_element.appendChild(new_div_element);
}

// Optional image section options sections properties contruction
function optional_image_section_properties_construction(image_object,div_element_id_to_append)
{
    // Modify the response by removing [] ""
    var modified_variable;
    modified_variable = image_object.toString().replace('[','');
    modified_variable = modified_variable.toString().replace(']','');

    // Create new image and create new properties for the same
    var image_to_append = new Image(100,100);
    image_to_append.src = modified_variable.toString().replace('"','').toString().replace('"','');
    image_to_append.alt = 'Image Not Found';
    image_to_append.style.margin = '2px';
    image_to_append.classList.add('option-image-class');

    // Get the main category div element and appendchild to it
    main_category_div_element = document.getElementById(div_element_id_to_append);

    var new_div_element = document.createElement("div");
    new_div_element.style.display = 'inline-block';

    new_div_element.appendChild(image_to_append);
    main_category_div_element.appendChild(new_div_element);
}


// Main Target Image Construction Properties
function main_target_image_construction(image_object,div_element_id_to_append)
{
        // Modify the response by removing [] ""

        var modified_variable;
        modified_variable = image_object.toString().replace('[','');
        modified_variable = modified_variable.toString().replace(']','');
    
        // Create new image and create new properties for the same
        var image_to_append = new Image(400,400);
 
        image_to_append.src = modified_variable.toString().replace('"','').toString().replace('"','');
        image_to_append.alt = 'Image Not Found';
        image_to_append.style.margin = '2px';
        image_to_append.addEventListener('drop', drop_optional_image, true);
        image_to_append.addEventListener('dragover', drag_over_optional_image, true);
        image_to_append.draggable = false;
    
        // Get the main category div element and appendchild to it
        main_category_div_element = document.getElementById(div_element_id_to_append);
        main_category_div_element.appendChild(image_to_append);
}
