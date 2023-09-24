class Term {
    constructor(i) {
        this.id = i
        this.name = ""
        this.line = ""
        this.color = 'rgb(230, 230, 230)'
        this.border = 'rgb(0, 0, 0)'
        this.w = 200
        this.h = 80
        this.x = window.innerWidth / 2 - this.w / 2
        this.y = window.innerHeight / 2  - this.h / 2
    }

    draw(ctx){
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.border
        ctx.lineWidth = 3;
        ctx.beginPath()
        ctx.roundRect(this.x, this.y, this.w, this.h, [10])
        ctx.fill()
        ctx.closePath()
    }
}