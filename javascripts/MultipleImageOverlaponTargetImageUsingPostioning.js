
var optionimageslist = document.getElementsByClassName("commonimageblock");

var target_image = document.getElementsByClassName("mainimagearea");
target_image[0].addEventListener('drop',dropimage);
target_image[0].addEventListener('dragover',draggingover);

var image_number,topposition = '0';
for(image_number = 0;image_number < optionimageslist.length;image_number++ )
{
  optionimageslist[image_number].draggable = true;
  optionimageslist[image_number].addEventListener('dragstart',dragstarted);
  optionimageslist[image_number].removeEventListener('drop',dropimage);
  optionimageslist[image_number].removeEventListener('dragover',draggingover);
}

var clonenode;

function dragstarted(event) {
  //console.log("Image Started at position x=" + event.clientX + " and y=" + event.clientY);

  var style = window.getComputedStyle(event.target, null);
  console.log();
  var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' +   (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
  //console.log(str);
  event.dataTransfer.setData("Text", str);

  clonenode = event.target.cloneNode(true);
}

function dropimage(event) {
  console.log("Imaged Dropped at position x=" + event.clientX + " and y=" + event.clientY);
  event.preventDefault();

  clonenode.style.position = 'absolute';
  clonenode.style.left = '5em';
  clonenode.style.top = topposition;
  topposition = (parseInt(topposition) + 1).toString() + "em";
  console.log(topposition);
  event.target.parentNode.appendChild(clonenode,event.target);

}

function draggingover(event) {
  //console.log(event.clientX);
  event.preventDefault();
}
