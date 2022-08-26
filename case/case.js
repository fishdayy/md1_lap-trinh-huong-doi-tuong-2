class Ninja {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 90;
        this.speedX = 10;
        this.speedY = 10;
        this.srcImg = 'right1.png'
        this.skill = document.createElement('img')
        this.skill.id = 'demo';
    }

    showNinja() {
        let html  = '<img src="" id="ninja" alt="" width="60" height="90" style="position: absolute" >'
        document.getElementById('game1').innerHTML = html;
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
        if (this.y > -10) {
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

let ninja = new Ninja(0, 180)
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

class Enemy {
    constructor(x, src) {
        this.x = x;
        this.width = 60;
        this.height = 90;
        this.y = Math.round(Math.random() * 180);
        this.speedX = Math.random()*2;
        this.srcImg = src
        this.enemy = document.createElement('img')
        this.enemy.id = 'zombie'
    }

    showEnemy() {
        this.enemy.style.position = 'absolute'
        this.enemy.style.height = this.height + 'px';
        this.enemy.style.top = this.y + 'px';
        this.enemy.style.left = this.x + 'px';
        this.enemy.src = this.srcImg
        document.querySelector('.game').appendChild(this.enemy)
    }

    moveToLeft() {
        this.x -= this.speedX;
        this.showEnemy()
        this.check()
    }

    check() {
        let x = document.getElementById('zombie')
        if (this.x <= 0) {
            this.enemy.parentNode.removeChild(x);
        }
    }
}

let diem = 0;

let enemy1 = new Enemy(650, 'zombie1.png')
function dichuyen1() {
    enemy1.moveToLeft();
    if (enemy1.x <= 0) {
        diem++
        enemy1.x = 650
        enemy1.y = Math.random() * 275
    }
    document.getElementById("diem").innerHTML = diem
    isCollision(ninja,enemy1)
    requestAnimationFrame(dichuyen1)
}
setInterval(dichuyen1, 25000)

let enemy2 = new Enemy(650, 'zombie2.png')
function dichuyen2() {
    enemy2.moveToLeft();
    if (enemy2.x <= 0) {
        diem++
        enemy2.x = 650
        enemy2.y = Math.random() * 275
    }
    document.getElementById("diem").innerHTML = diem
    isCollision(ninja,enemy2)
    requestAnimationFrame(dichuyen2)
}

let enemy3 = new Enemy(650, 'zombie3.png')
function dichuyen3() {
    enemy3.moveToLeft();
    if (enemy3.x <= 0) {
        diem++
        enemy3.x = 650
        enemy3.y = Math.random() * 275
    }
    document.getElementById("diem").innerHTML = diem
    isCollision(ninja,enemy3)
    requestAnimationFrame(dichuyen3)
}

function isCollision(ninja, enemy) {
    if (ninja.x + ninja.width >= enemy.x &&
        ninja.x <= enemy.x + enemy.width &&
        ninja.y + enemy.height >= enemy.y &&
        ninja.y <= enemy.y + enemy.height) {
        alert('Game Over')
    }
}

function delay(){
    dichuyen1()
    dichuyen2()
    dichuyen3()
    setInterval(dichuyen1,25000)
    setInterval(dichuyen2, 20000)
    setInterval(dichuyen3, 15000)
}

setInterval(delay,7000)





