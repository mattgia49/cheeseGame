class Navbar {
    constructor(){
        this.x = 0
        this.y = 56
        this.w = 40
        this.h = 40
        this.isOpen = false
    }

    draw(ctx){
        if(!this.isOpen){
            ctx.beginPath();
            ctx.strokeStyle = "gray"
            ctx.lineCap = "round";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 10, this.y + 10);
            ctx.lineTo(this.x + 30, this.y + 10);
            ctx.moveTo(this.x + 10, this.y + 16);
            ctx.lineTo(this.x + 30, this.y + 16);
            ctx.moveTo(this.x + 10, this.y + 22);
            ctx.lineTo(this.x + 30, this.y + 22);
            ctx.stroke();
            ctx.closePath()
        } else {
            
        }
    }

    toggle(){
        if(this.isOpen){
            this.isOpen = false
        } else {
            this.isOpen = true
        }
    }

    checkClick(x, y){
        if(this.x <= x && x <= this.x + this.w && this.y <= y && y <= this.y + this.h){
            return true
        } else {
            return false
        }
    }
}