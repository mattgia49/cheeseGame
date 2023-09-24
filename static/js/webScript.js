const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

let currProj = null

let currView = null

let nb = new Navbar()

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

canvas.addEventListener('click', function(e){
    if (currProj == null && currView == null) {
        if(nb.checkClick(e.x, e.y)){
            nb.toggle()
        }
    }
})

window.requestAnimationFrame(draw)


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (currProj == null && currView == null) {
        nb.draw(ctx)
    }
    window.requestAnimationFrame(draw)

}