var actualimage = document.getElementById("img2");

actualimage.draggable = true;
actualimage.addEventListener('dragstart',dragstarted);
actualimage.addEventListener('drop',dropimage);
actualimage.addEventListener('dragover',draggingover);

function dragstarted(event) {
  console.log("Image Started at position x=" + event.clientX + " and y=" + event.clientY);

  var style = window.getComputedStyle(event.target, null);
  var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' +              (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
  event.dataTransfer.setData("Text", str);
}

function dropimage(event) {
  console.log("Imaged Dropped at position x=" + event.clientX + " and y=" + event.clientY);

  var offset = event.dataTransfer.getData("Text").split(',');
  var dm = document.getElementById(offset[2]);
  dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
  dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
  dm.style.height = "10em";
  dm.style.width = "10em";

  event.preventDefault();
}

function draggingover(event) {
  //console.log(event.clientX);
  event.preventDefault();
}
