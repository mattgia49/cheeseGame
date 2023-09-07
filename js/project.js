class Project {
    constructor(name) {
        this.name = name
        this.buf = 10
        this.fontSize = 24
        this.plusSize = 30
    }

    draw(ctx){
        ctx.font = `${this.fontSize}px verdana`
        ctx.fillStyle = 'rgb(224, 166, 255)'
        ctx.strokeStyle = 'rgb(196, 89, 255)'
        ctx.roundRect(this.buf, window.innerHeight - this.fontSize - this.buf * 3, ctx.measureText(this.name).width + this.buf *2, 24 + this.buf * 2, [10])
        ctx.roundRect(this.buf + ctx.measureText(this.name).width + this.buf * 3, window.innerHeight - this.fontSize - this.buf * 3,  24 + this.buf * 2, 24 + this.buf * 2, [10])
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle = 'rgb(120, 33, 166)'
        ctx.fillText(this.name, this.buf * 2, window.innerHeight - this.fontSize)

        ctx.strokeStyle = 'rgb(120, 33, 166)'
        ctx.beginPath();
        ctx.moveTo(this.buf + ctx.measureText(this.name).width + this.buf * 4, window.innerHeight - this.fontSize - this.buf * 3 + ((24 + this.buf * 2 ) / 2));
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.lineTo(this.buf + ctx.measureText(this.name).width + this.buf * 4 + 24, window.innerHeight - this.fontSize - this.buf * 3 + ((24 + this.buf * 2 ) / 2));
        ctx.moveTo(this.buf + ctx.measureText(this.name).width + this.buf * 3 + ((24 + this.buf * 2 ) / 2), window.innerHeight - this.fontSize - this.buf *2);
        ctx.lineTo(this.buf + ctx.measureText(this.name).width + this.buf * 3 + ((24 + this.buf * 2 ) / 2), window.innerHeight - this.fontSize - this.buf * 2 + ((24 + this.buf * 2 ) / 2));
        ctx.stroke();
    }
}