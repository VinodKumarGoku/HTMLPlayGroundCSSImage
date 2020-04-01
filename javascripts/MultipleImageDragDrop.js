
// Global Variables
var elementtomove;


function stardragging(event) {
  console.log("Start dragging the element");

  elementtomove = event.target;
};

function draghoveroover(event) {
  console.log("Hovering over drop element");
  event.preventDefault();
}

var handler = function(event) {
  console.log("Hello World");
}

function dropimagehere(event) {
  console.log("Dropped the element");
  //event.preventDefault();

  var clonenode = elementtomove.cloneNode(true);
  clonenode.draggable = false;
  clonenode.addEventListener('dragover',draghoveroover);
  clonenode.addEventListener('drop',dropimagehere);
  clonenode.style.height = "400px";
  clonenode.style.width = "400px";

  event.target.parentNode.replaceChild(clonenode,event.target);
  //console.log(event.target);

}
