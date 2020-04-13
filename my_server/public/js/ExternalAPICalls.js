var detination_url = "http://localhost:1804";
var xhrrequest;
//var main_category_div_element = document.getElementById('main_category_images');
var main_category_div_element;
var global_main_category_div_element_id;

function page_start_loading(event) {
    console.log("Page Loaded with js successfully");
}

function retrive_filelist(event,main_category_div_element_id,url_appender) {
    var modified_route = detination_url + url_appender;
    console.log("Calling External API");
    
    global_main_category_div_element_id = main_category_div_element_id;
    xhrrequest.open('GET',modified_route,true);
    xhrrequest.send();

    xhrrequest.addEventListener('readystatechange',processresponse_server,true);
}

function processresponse_server(event) {

    if(xhrrequest.readyState == 4 && xhrrequest.status == 200)
    {
        console.log("Recieved Response for " + xhrrequest.responseURL);
        
        var http_response = xhrrequest.response;
        
        try
        {
            var image_data_list_recieved = http_response.split(",");
            
            for (let index = 0; index < image_data_list_recieved.length; index++) {
                
                create_image_filed_Set_properties(image_data_list_recieved[index]);
            }
        } 
        catch(e) { console.log(e);
        }
    }
}

function create_image_filed_Set_properties(image_object,div_element_id_to_append)
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
    //image_to_append.style.height = '100px';
    //image_to_append.style.width = '100px';
    image_to_append.classList.add('option-image-class');

    // Get the main category div element and appendchild to it
    main_category_div_element = document.getElementById(div_element_id_to_append);

    var new_div_element = document.createElement("div");
    new_div_element.style.display = 'inline-block';

    new_div_element.appendChild(image_to_append);
    main_category_div_element.appendChild(new_div_element);

}


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