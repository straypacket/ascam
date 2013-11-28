var room;
var last;
var ascii;

var broadcasting = false;
var color = false;
//var colorWorker = new Worker("/js/renderColor.js");
//colorWorker.onmessage = draw;
//var asciiWorker = new Worker("/js/render.js");
//asciiWorker.onmessage = draw;
var client = new BinaryClient('ws://'+window.location.hostname+':9001');
var stream;
var debug;
//var canvas = document.getElementById('c');
client.on('open', function(){
  stream = client.createStream({room: room, type: 'read'});
  stream.on('data', function(data) {
    // var array = new Uint8Array(data);
    // blob = new Blob([array], {type: 'image/png'});
    // debug = blob;
    // var url = URL.createObjectURL(blob);
    // console.log(url);
    // document.getElementById('blob').src = url;

    debug = new Uint8Array(data);
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    img = ctx.createImageData(320,240);
    img.data.set(debug);

    //img.data = new Uint8Array(data);
    //var ddata = new Uint8Array( Array.apply( [], debug ).slice() );
    //debug = debug;
    //img.data = new Uint8Array(debug);
    //img.data = new Uint8Array( Array.apply( [], debug ).slice() );

    ctx.putImageData(img, 0, 0);

  });
});

$(document).ready(function(){
  last = document.getElementById('last');
  // ascii = document.getElementById("ascii");
  // $(ascii).width($(last).outerWidth())
  // $(ascii).height($(last).outerHeight());
  // $(ascii).css('visibility', 'visible');
  // $(last).css('visibility', 'visible');
  
  $("#showbtn").toggle(function(){
    color = true;
    $("#btn2text").text("ASCII Mode");
  }, function(){
    color = false;
    $("#btn2text").text("Color Mode");
  });
});

// function draw(event) {
//   var strChars = event.data;
//   ascii.removeChild(last);
//   // can't get a span or div to flow like an img element, but a table works?
//   last = document.createElement("div");
//   last.innerHTML = strChars;
//   ascii.appendChild(last);
// } 

