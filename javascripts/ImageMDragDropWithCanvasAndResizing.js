

var can = document.querySelector('canvas');
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

}

var canvasstartposx = 0, canvasstartposy = 0;
function elementdragstarted(event) {
  console.log("Dragging elemnent started");
}

function dragstartedcanvas(event) {
  console.log("Drag Image Started " + event.clientX + " and " + event.clientY);
}

function dragovertarget(event) {
  event.preventDefault();
}

function imagedropevent(event) {
  event.preventDefault();
  console.log("Drag Event Ended " + event.clientX + " and " + event.clientY);
  //can.style.position = 'absolute';
  can.style.top = (event.clientY).toString() + 'px';
  can.style.left = (event.clientX).toString() + 'px';
}

//var doubleclickonoff = false;
function activateresizebutton(event) {
  console.log("Canvas Double Clicked");
  var resize_button = document.getElementById("resize_button");
  var increase_imagesize = document.getElementById("increase_imagesize");
  var decrease_imagesize = document.getElementById("decrease_image_size");
  console.log(resize_button.style.display);
  if(!resize_button.style.display || resize_button.style.display == 'none')
  {
    resize_button.style.display = 'inline-block';
    increase_imagesize.style.display = 'inline-block';
    decrease_imagesize.style.display = 'inline-block';
  }
  else
  {
    resize_button.style.display = 'none';
    increase_imagesize.style.display = 'none';
    decrease_imagesize.style.display = 'none';
  }

}


function increase_image(event) {
  var w2= Math.ceil(can.width/0.9), h2= Math.ceil(can.height/0.9);
  can.width = w2;
  can.height = h2;
  c.drawImage(img, 0,0, w2, h2);
}

function decrease_image(event) {
  var w2= Math.ceil(can.width/1.1), h2= Math.ceil(can.height/1.1);
  can.width = w2;
  can.height = h2;
  c.drawImage(img, 0,0, w2, h2);
}
