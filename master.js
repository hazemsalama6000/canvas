
let canvas = document.getElementById('draw-canvas');
// refer to inside canvas to draw in it
let ctx = canvas.getContext('2d');


//fill with gradient
let gradient = ctx.createLinearGradient(100, 0, 130, 0); //use gradient var in fillStyle
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');

//fill with pattern
let backImg = document.getElementById('back-img');
let pattern = ctx.createPattern(backImg, 'no-repeat'); //use pattern var in fillStyle



//fill next drawing with color, gradient, pattern
ctx.fillStyle = pattern;
//fill with rectangle
ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

//create rect with stoke with border background pattern
ctx.strokeStyle = gradient;
ctx.lineWidth = 50;
ctx.strokeRect(100, 100, 100, 100);

// create filled text
ctx.font = '100px tahoma';
ctx.fillStyle = 'blue';
ctx.fillText('Zomma', 50, 300);

// create stroked text
ctx.font = '60px tahoma';
ctx.strokeStyle = gradient;
ctx.lineWidth = 1;
ctx.strokeText('Zomma', 50, 400);

//------------------------------------------------------//


let canvasChar = document.querySelector('#canvas-charts');

let ctxChar = canvasChar.getContext('2d');

canvasChar.style.border = "1px solid red";

ctxChar.fillStyle = "blue";
ctxChar.fillRect(50, 50, 50, canvasChar.clientHeight - 50);
ctxChar.fillStyle = "white";
ctxChar.font = "20px tahoma";
ctxChar.fillText('1', 70, canvasChar.clientHeight - 20);

ctxChar.fillStyle = "red";
ctxChar.fillRect(150, 100, 50, canvasChar.clientHeight - 100);
ctxChar.font = "20px tahoma";
ctxChar.fillStyle = "white";
ctxChar.fillText('2', 170, canvasChar.clientHeight - 20);

ctxChar.fillStyle = "yellow";
ctxChar.fillRect(250, 150, 50, canvasChar.clientHeight - 150);
ctxChar.font = "20px tahoma";
ctxChar.fillStyle = "blue";
ctxChar.fillText('3', 270, canvasChar.clientHeight - 20);

ctxChar.shadowColor="black";
ctxChar.shadowBlur=40;
ctxChar.shadowOffsetX=50;
ctxChar.shadowOffsetY=60;

ctxChar.fillStyle = "black";
ctxChar.fillRect(350, 200, 50, canvasChar.clientHeight - 200);
ctxChar.fillStyle = "white";
ctxChar.font = "20px tahoma";
ctxChar.fillText('4', 370, canvasChar.clientHeight - 20);

ctxChar.fillStyle = "green";
ctxChar.fillRect(450, 250, 50, canvasChar.clientHeight - 250);
ctxChar.fillStyle = "white";
ctxChar.font = "20px tahoma";
ctxChar.fillText('5', 470, canvasChar.clientHeight - 20);


// begin canvas path

let canvasPath = document.getElementById('canvas-path')
canvasPath.style.border = "1px solid red";

let ctxPath = canvasPath.getContext('2d');

ctxPath.beginPath();

ctxPath.moveTo(canvasPath.clientWidth, canvasPath.clientHeight);

ctxPath.lineTo(0, 0);

ctxPath.moveTo(canvasPath.clientWidth, 0);

ctxPath.lineTo(0, canvasPath.clientHeight);

ctxPath.strokeStyle = "red";

ctxPath.stroke();

ctxPath.fillRect(canvasPath.clientWidth / 2 - 50, canvasPath.clientHeight / 2 - 50, 100, 100)

ctxPath.fillStyle = "blue";
ctxPath.save();

ctxPath.fillStyle="red";

ctxPath.restore();
ctxPath.translate(100,50);

ctxPath.fillRect(0,0,100,100);



// end canvas path


// shape and circle canvas

let canvasClosed = document.querySelector('#canvas-closed-path');
canvasClosed.style.border = "1px solid red";

let ctxClosed = canvasClosed.getContext('2d');
ctxClosed.moveTo(50, 50);
ctxClosed.lineTo(200, 200);
ctxClosed.lineTo(200, 100);
ctxClosed.closePath();

ctxClosed.lineWidth = 10;

ctxClosed.fillStyle = "blue";
ctxClosed.fill();

ctxClosed.stroke();

ctxClosed.beginPath();


ctxClosed.arc(canvasClosed.clientWidth / 2, canvasClosed.clientHeight / 2, canvasClosed.clientWidth / 2, 0, 1 * (2*Math.PI));


ctxClosed.strokeStyle="blue";
ctxClosed.linewidth=10;
ctxClosed.stroke();

ctxClosed.shadowColor="black";
ctxClosed.shadowBlur=40;

ctxClosed.fillStyle="red";
ctxClosed.fill();

//end shape and circle canvas






