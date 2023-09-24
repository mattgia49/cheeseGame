class Project {
    constructor(name) {
        this.name = name
        this.terms = []
        this.conns = []
        this.buf = 10
        this.fontSize = 24
        this.plusSize = 30
        this.term_id = 0
    }

    draw(ctx){
        ctx.font = `${this.fontSize}px verdana`
        ctx.fillStyle = 'rgb(224, 166, 255)'
        ctx.strokeStyle = 'rgb(196, 89, 255)'
        ctx.lineWidth = 3

        ctx.beginPath()
        ctx.roundRect(this.buf, window.innerHeight - this.fontSize - this.buf * 3, ctx.measureText(this.name).width + this.buf *2, 24 + this.buf * 2, [10])
        ctx.roundRect(this.buf + ctx.measureText(this.name).width + this.buf * 3, window.innerHeight - this.fontSize - this.buf * 3,  24 + this.buf * 2, 24 + this.buf * 2, [10])
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        ctx.fillStyle = 'rgb(120, 33, 166)'
        ctx.fillText(this.name, this.buf * 2, window.innerHeight - this.fontSize)

        ctx.strokeStyle = 'rgb(120, 33, 166)'
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineWidth = 4;
        ctx.moveTo(this.buf * 5 + ctx.measureText(this.name).width, window.innerHeight - this.fontSize - this.buf * 3 + ((24 + this.buf * 2 ) / 2));
        ctx.lineTo(this.buf * 5 + ctx.measureText(this.name).width + this.fontSize, window.innerHeight - this.fontSize - this.buf * 3 + ((24 + this.buf * 2 ) / 2));
        ctx.moveTo(this.buf * 4 + ctx.measureText(this.name).width + ((24 + this.buf * 2 ) / 2), window.innerHeight - this.fontSize - this.buf * 2);
        ctx.lineTo(this.buf * 4 + ctx.measureText(this.name).width + ((24 + this.buf * 2 ) / 2), window.innerHeight - this.buf * 2);
        ctx.stroke();
        ctx.closePath()

        this.terms.forEach(function(val, index){
            val.draw(ctx)
        })
    }

    addTerm(){
        this.term_id++
        this.terms.push(new Term(this.term_id))
    }
}