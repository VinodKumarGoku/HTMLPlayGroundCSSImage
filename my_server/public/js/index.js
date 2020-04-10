const detination_url = "http://localhost:38877";
var xhrrequest = new XMLHttpRequest();
//var main_category_div_element = document.getElementById('main_category_images');
var main_category_div_element;

function page_start_loading(event) {
    console.log("Page Loaded with js successfully");
}

function retrive_filelist(event) {
    var modified_route = detination_url + '/main_image_file_list';
    xhrrequest.open('GET',modified_route,true);
    xhrrequest.send();

    xhrrequest.addEventListener('readystatechange',processresponse_server,false);
}

function processresponse_server(event) {

    if(xhrrequest.readyState == 4 && xhrrequest.status == 200)
    {
        var http_response = xhrrequest.response;
        console.log(main_category_div_element);
        
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

function create_image_filed_Set_properties(image_object)
{
    // Modify the response by removing [] ""
    var modified_variable;
    modified_variable = image_object.toString().replace('[','');
    modified_variable = modified_variable.toString().replace(']','');

    // Create new image and create new properties for the same
    var image_to_append = new Image(100,100);
    image_to_append.src = modified_variable.toString().replace('"','').toString().replace('"','');

    // Get the main category div element and appendchild to it
    main_category_div_element = document.getElementById('main_category_images');
    main_category_div_element.appendChild(image_to_append);

    //return modified_variable.toString().replace('"','').toString().replace('"','');
}

