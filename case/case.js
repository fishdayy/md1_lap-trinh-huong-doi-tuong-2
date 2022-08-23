class Ninja{
    x;
    y;
    width;
    height;
    speedX;
    speedY;
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = 10;
        this.speedY = 10;

    }
    showNinja(){
        let ninja = document.getElementById('gameCanvas')
        let ctx = ninja.getContext("2d");
        ctx.clearRect(0,0, 500, 500)
        let imgNinja = document.getElementById("ninja");
        ctx.drawImage(imgNinja,this.x,this.y)
    }

    move(){
        this.x += this.speedX
        this.y += this.speedY
        this.showNinja()
    }
}

class Dinosaur{
    x;
    y;
    width;
    height;
    speedX;
    speedY;
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = 10;
        this.speedY = 10;
    }

}

let ninja = new Ninja(0,0,80,60)
ninja.showNinja()
window.addEventListener('keydown',(e) =>{
    if (e.keyCode == 40) {
        ninja.speedX = 0;
        ninja.speedY = 10;

        ninja.move()
    }
    if (e.keyCode == 37) {
        ninja.speedX = -10;
        ninja.speedY = 0;
        ninja.move()
    }
    if (e.keyCode == 38) {
        ninja.speedX = 0;
        ninja.speedY = -10;
        ninja.move()
    }
    if (e.keyCode == 39) {
        ninja.speedX = 10;
        ninja.speedY = 0;
        ninja.move()
    }
})
requestAnimationFrame(ninja.move)