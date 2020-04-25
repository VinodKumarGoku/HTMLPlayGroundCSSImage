var url = "http://localhost:42137/save_image";

function send_image_data_to_server(div_element_id)
{
    console.log("Sending Image to Server");
    
    var data = document.getElementById(div_element_id).outerHTML;
    var send_data = {payload:data};
    var json = JSON.stringify(send_data);
    console.log(json);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function() {
        //var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log("Recived response form server");
        }
    }
    xhr.send(json);
}