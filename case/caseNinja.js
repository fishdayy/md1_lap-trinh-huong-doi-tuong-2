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
        if (this.y > 120) {
            this.y -= this.speedY;
            this.srcImg = (this.srcImg === 'up2.png') ? 'up1.png' : 'up2.png'
            this.showNinja();
        }
    }

    moveLeft() {
        if (this.x > 0) {
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

class Enemy{
    constructor(y, src) {
        this.x = 0;
        this.y = y;
        this.width = 60;
        this.height = 90;
        this.speedX = 5;
        this.srcImg = src
    }

    showEnemy() {
        enemy = document.createElement('img')
        enemy.style.position = 'relative'
        enemy.style.width = this.width + 'px';
        enemy.style.height = this.height + 'px';
        enemy.style.top = this.y + 'px';
        enemy.style.left = this.x + 'px';
        enemy.src = this.srcImg
        document.querySelector('.game').appendChild(enemy)
    }
}
let enemy = new Enemy(180, 'zombie1.1.png')
enemy.showEnemy();
let enemy2 = new Enemy(200,'zombie2.1.png')
enemy2.showEnemy()
let enemy3 = new Enemy(250,'zombie3.1.png')
enemy3.showEnemy()