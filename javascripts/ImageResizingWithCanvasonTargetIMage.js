

var can= document.querySelector('canvas');
var c = can.getContext('2d');

var img= new Image(200,300);
img.src= "../image_store/Part3.png";
img.onload = drawImage;


function drawImage(){
  //console.log("Canvas height and width " + can.width + " and " + can.height);
  //console.log("Image resolution properties " + img.width + "  and " + img.height);
  can.height = img.height;
  can.width = img.width;
	c.drawImage(img, 0,0,img.width,img.height);
}

var startx = 0,starty = 0;
function mouseup(event) {
  console.log("Mouse up event Ended " + event.clientX + " and " + event.clientY + " and delta " + (startx - event.clientX) +"," + (starty - event.clienty));
  //console.log("Canvas actual width " + can.width + " and " + can.height);

  if(startx != 0 && starty !=0)
  {
    // Get the ending coordinates after the event
    var endx = event.clientX;
    var endy = event.clientY;

    can.style.position = 'absolute';
    can.style.top = "100px";
    can.style.left = "100px";
    

    // Resize the image after moving to new postion
    // Some important math calculations
    var diffxvalue = (startx - event.clientX), diffyvalue = (starty - event.clientY);
    var sizevaluex = 1 + Math.abs((diffxvalue/can.width));
    var sizevaluey = 1 + Math.abs((diffyvalue/can.height));
    console.log("Size reduction computed " + sizevaluex + " and " + sizevaluey);
    var w2= Math.ceil(can.width/sizevaluex), h2= Math.ceil(can.height/sizevaluey);
    can.width = w2;
    can.height = h2;
    c.drawImage(img, 0,0, w2, h2);
  }
  startx = 0;
  starty = 0;
}

// below here to resize canvas
function resizeCanvas(event){
  console.log("Mousedown  Event Started " + event.clientX + " and " + event.clientY );
  startx = event.clientX;
  starty = event.clientY;

  /*
  var w2= Math.ceil(can.width/1.1), h2= Math.ceil(can.height/1.1);
	can.width= w2;
  can.height= h2;
  c.drawImage(img, 0,0, w2, h2);
  */
  //console.log("Click event ended");
}

function elementdragstarted(event) {
  console.log("Dragging elemnent started");
}
