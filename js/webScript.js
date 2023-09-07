const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

ctx.fillStyle = "white"
ctx.lineWidth = 3
ctx.beginPath()
ctx.roundRect(100, 100, 100, 100, [25])
ctx.fill()
ctx.stroke()
