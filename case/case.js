class Ninja {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 59;
        this.height = 86;
        this.speedX = 10;
        this.speedY = 10;
        this.srcImg = 'down1.png'
    }

    showNinja() {
        let ninja = document.getElementById('ninja');
        ninja.style.position = 'relative';
        ninja.style.width = this.width + 'px';
        ninja.style.height = this.height + 'px';
        ninja.style.top = this.y + 'px';
        ninja.style.left = this.x + 'px';
        ninja.src = this.srcImg
    }

    moveDown() {
        if (this.y < 275) {
            this.y += this.speedY;
            this.srcImg = (this.srcImg === 'down2.png') ? 'down1.png' : 'down2.png'
            this.showNinja();
        }
    }

    moveUp() {
        if (this.y > 120){
        this.y -= this.speedY;
        this.srcImg = (this.srcImg === 'up2.png') ? 'up1.png' : 'up2.png'
        this.showNinja();
        }
    }

    moveLeft() {
        if (this.x > 0 ){
        this.x -= this.speedX;
        this.srcImg = (this.srcImg === 'left2.png') ? 'left1.png' : 'left2.png'
        this.showNinja();
        }
    }

    moveRight() {
        if (this.x < 630)
        this.x += this.speedX;
        this.srcImg = (this.srcImg === 'right2.png') ? 'right1.png' : 'right2.png'
        this.showNinja();
    }
}

let ninja = new Ninja(325, 180)
ninja.showNinja();
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 40) {
        ninja.moveDown();
    }
    if (e.keyCode === 38) {
        ninja.moveUp();
    }
    if (e.keyCode === 39) {
        ninja.moveRight();
    }
    if (e.keyCode === 37) {
        ninja.moveLeft();
    }
})

let zombie11 = document.createElement('zombie1.1');
zombie11.src ='zombie1.1.png';
document.querySelector('.game').appendChild(zombie11);

// let imgZombie1 = "zombie1.png"
// let imgZombie11 = "zombie1.1.png"
// let imgZombie2 = "zombie2.png"
// let imgZombie21 = "zombie2.1.png"
// let imgZombie3 = "zombie3.png"
// let imgZombie31 = "zombie3.1.png"
// let arrObstacle = [imgZombie1,imgZombie11,imgZombie2,imgZombie21,imgZombie3,imgZombie31];
// let obstacles = [];
// function addObstacle(){
//     let obstacle = new Obstacle();
// }




