canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
color = "black";
width_of_line = 1;


canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown()
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);


function my_mouseup()
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of mouse x and y coordinates are =");
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y =")
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}