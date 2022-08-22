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
        let imgNinja = document.getElementById("ninja");
        ctx.drawImage(imgNinja,10,10)
    }

    moveToLeft(){
        this.x -= this.speedX
        this.showNinja()
    }
    moveToTop(){
        this.y +=this.speedY
        this.showNinja()
    }
    moveToRight(){
        this.x += this.speedX
        this.showNinja()
    }
    moveToBot() {
        this.y -= this.speedY
        this.showNinja()
    }
}
let ninja = new Ninja(700,300,80,60)
ninja.showNinja()
ninja.showNinja()
window.addEventListener('keydown',(e) =>{
   switch (e.keyCode){
       case 37:
           ninja.moveToLeft();
           break;
       case 39:
           ninja.moveToRight()
           break;
       case 38 :
           ninja.moveToBot()
           break
       case 40 :
           ninja.moveToTop()
           break
   }
})