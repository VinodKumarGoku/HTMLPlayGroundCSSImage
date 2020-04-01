
var optionimageslist = document.getElementsByClassName("commonimageblock");

var target_image = document.getElementsByClassName("mainimagearea");
target_image[0].addEventListener('drop',dropimage,true);
target_image[0].addEventListener('dragover',draggingover,true);

var image_number,topposition = '0';
for(image_number = 0;image_number < optionimageslist.length;image_number++ )
{
  optionimageslist[image_number].draggable = true;
  optionimageslist[image_number].addEventListener('dragstart',dragstarted);
  optionimageslist[image_number].addEventListener('mousemove',getcoordinates);
  //optionimageslist[image_number].addEventListener('ondblclick',display_sizing_buttons);
  optionimageslist[image_number].removeEventListener('drop',dropimage);
  optionimageslist[image_number].removeEventListener('dragover',draggingover);
}

var selected_image_for_scaling;
function display_sizing_buttons(event) {
  selected_image_for_scaling = event.target.id;
  console.log("The selected element id is " + selected_image_for_scaling);
  var increase_image = document.getElementById("increase_imagesize");
  var decrease_image = document.getElementById("decrese_imagesize");

  if(!increase_image.style.display || increase_image.style.display == 'none')
  {
      increase_image.style.display = 'inline-block';
      decrease_image.style.display = 'inline-block';
  }
  else {
      increase_image.style.display = 'none';
      decrease_image.style.display = 'none';
  }
}

function increase_imagesize(event) {
  //console.log(actual_image.height + " and " + actual_image.height/0.9);
  var actual_image = document.getElementById(selected_image_for_scaling);
  actual_image.style.height = Math.ceil(actual_image.height/0.9).toString() + 'px';
  actual_image.style.width = Math.ceil(actual_image.width/0.9).toString() + 'px'
}

function decrease_imagesize(event) {
  //console.log(actual_image.height + " and " + actual_image.height/0.9);
  var actual_image = document.getElementById(selected_image_for_scaling);
  actual_image.style.height = Math.ceil(actual_image.height/1.1).toString() + 'px';
  actual_image.style.width = Math.ceil(actual_image.width/1.1).toString() + 'px'
}

var clonenode,lastelemid,idcounter = 1;

function getcoordinates(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  //document.getElementById("demo").innerHTML = coor;
}


function dragstarted(event) {
  //////console.log("Image Started at position x=" + event.clientX + " and y=" + event.clientY);
  //////console.log("The coordintes of offset are " + event.target.offsetLeft + " and " + event.target.offsetTop);
  var clonenodeset = false;

  if(event.target.parentNode.id == "mainimage")
  {
    lastelemid = event.target.id;
    //console.log("The last elem id is " + lastelemid);
  }
  var style = window.getComputedStyle(event.target, null);

  clonenode = event.target.cloneNode(true);

}

function dropimage(event) {

  event.stopPropagation();
  event.preventDefault();

  var prevclonenode = clonenode;

  clonenode.style.position = 'absolute';
  clonenode.style.left = (event.clientX - 80).toString() + 'px';
  clonenode.style.top = (event.clientY - 80).toString() + 'px';

  event.target.parentNode.appendChild(clonenode,event.target);
  clonenode.addEventListener('dragstart',dragstarted);
  clonenode.addEventListener('dblclick',display_sizing_buttons);

  //console.log("The clonable clone id " + clonenode.id);
  if(lastelemid != undefined && event.target.parentNode.id == "mainimage" && clonenode.id)
  {
    var deleteelement = document.getElementById(lastelemid.toString());
    event.target.parentNode.removeChild(deleteelement);
  }

  clonenode.id = idcounter;
  idcounter = idcounter + 1;
}

function draggingover(event) {
  ////////console.log("Imaged Hover at position x=" + event.clientX + " and y=" + event.clientY);
  event.preventDefault();

}
