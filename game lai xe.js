class Xe{
    x;
    y;
    widthCar;
    heightCar;
    speedx;
    speedy;

    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.widthCar = width;
        this.heightCar = height;
        this.speedx = 10;
        this.speedy = 10;
    }

    showCar(){
        let car = document.getElementById('xe')
        car.style.position = 'absolute';
        car.style.width = this.widthCar + 'px';
        car.style.height = this.heightCar + 'px';
        car.style.top = this.y + 'px';
        car.style.left = this.x + 'px';
    }

    moveToLeft(){
        this.x -= this.speedx
        this.showCar()
    }
    moveToTop(){
        this.y +=this.speedy
        this.showCar()
    }
    moveToRight(){
        this.x += this.speedx
        this.showCar()
    }
    moveToBot(){
        this.y -= this.speedy
        this.showCar()
    }
}

let car = new Xe(700,300,80,60)
car.showCar()
window.addEventListener('keydown',(e) =>{
    if (e.keyCode === 38) {
        car.moveToBot();
    }
    if (e.keyCode === 37) {
        car.moveToLeft()
    }
    if (e.keyCode === 40) {
        car.moveToTop()
    }
    if (e.keyCode === 39) {
        car.moveToRight()
    }
})

class Obstacles{
    x;
    y;
    widthObstacles;
    heightObstacles;
    speedX;
    speedY;
    constructor(x,y,widthObstacles,heightObstacles) {
        this.x = x;
        this.y = y;
        this.widthObstacles = widthObstacles;
        this.heightObstacles = heightObstacles;
        this.speedX = 10;
        this.speedY = 10;
    }

    showObstacles(){
        let stone = document.getElementById('da')
        stone.style.position = 'absolute';
        stone.style.width = this.widthObstacles + 'px';
        stone.style.height = this.heightObstacles + 'px';
        stone.style.top = this.y + 'px';
        stone.style.left = this.x + 'px';
    }
    move(){
        this.x += this.speedX
        this.y += this.speedY
    }
}
let stone = new Obstacles(100,100,100,100)
stone.showObstacles()
setInterval(stone.move(),100)