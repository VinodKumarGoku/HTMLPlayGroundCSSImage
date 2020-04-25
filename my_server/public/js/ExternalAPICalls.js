var detination_url = "http://localhost:50000";
var xhrrequest;
//var main_category_div_element = document.getElementById('main_category_images');
var main_category_div_element;
var global_main_category_div_element_id;

// Call Appropriate function in ImageDynamicLoadSectionsSettings.js
// For setting different properties for different sections
function create_image_filed_Set_properties(image_object,div_element_id_to_append)
{
    switch(div_element_id_to_append) 
    {
        case 'main_target_image_conatiner': 
            main_target_image_construction(image_object,div_element_id_to_append);
            break;
        case 'main_category_div_element':
            main_div_container_option_image_construction(image_object,div_element_id_to_append);
            break;
        case 'sub_category_image_file_list':
            subcategory_image_section_properties_construction(image_object,div_element_id_to_append);
            break;
        case 'optinal_image_section':
            optional_image_section_properties_construction(image_object,div_element_id_to_append);
            break;
        default:
            break;
    }

}

// Main Server call from client to retrive all data and operations from
// Server. Which inturn will callback for setting different data items on
// the client page
function retrieve_dynamic_content(event,div_container_to_url_mapping, url_fetch_address) {

    xhrrequest = new Array(div_container_to_url_mapping.length);
    for(let i = 0; i < div_container_to_url_mapping.length;i++)
    {
        var fetch_url_address = detination_url + url_fetch_address[i];
        xhrrequest[i] = new XMLHttpRequest();
        xhrrequest[i].open('GET',fetch_url_address,true);
        xhrrequest[i].onreadystatechange = function() {
            if(xhrrequest[i].readyState == 4 && xhrrequest[i].status == 200)
            {
                console.log("Recieved Response for " + xhrrequest[i].responseURL);
                var http_response = xhrrequest[i].response;
        
                try
                {
                  var image_data_list_recieved = http_response.split(",");
            
                  for (let index = 0; index < image_data_list_recieved.length; index++) 
                  {
                    create_image_filed_Set_properties(image_data_list_recieved[index],
                                                        div_container_to_url_mapping[i]);
                  }
                } 
                catch(e) { console.log(e);}
            }
        }
        xhrrequest[i].send();
    }
}