class Ninja {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 59;
        this.height = 86;
        this.speedX = 10;
        this.speedY = 10;
        this.srcImg = 'down1.png'
        this.srcSkill = 'red_fireball_1.png'
        this.speedSkill = 15;
        this.skill = document.createElement('img')
    }

    showSkillNinja() {
        this.skill.style.position = 'absolute'
        this.skill.style.height = this.height + 'px';
        this.skill.style.top = this.y + 'px';
        this.skill.style.left = this.x + 'px';
        this.skill.src = this.srcSkill
        document.querySelector('.game').appendChild(this.skill)
    }


    moveSkillLeft() {
        this.x -= this.speedX;
        this.showSkillNinja()
    }

    moveSkillRight() {
        this.x += this.speedX;
        this.showSkillNinja()
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
ninja.showSkillNinja();

function dichuyenFiveball() {
    ninja.moveSkillRight();
    if (ninja.x >= 650) {
        ninja.x = this.x
    }
}

dichuyenFiveball()


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
    if (e.keyCode === 75) {
        dichuyenFiveball()

    }
})

class Enemy {
    constructor(x, src) {
        this.x = x;
        this.y = Math.round(Math.random() * 180);
        this.height = 90;
        this.speedX = 2;
        this.srcImg = src
        this.enemy = document.createElement('img')
    }

    showEnemy() {
        this.enemy.style.position = 'absolute'
        this.enemy.style.height = this.height + 'px';
        this.enemy.style.top = this.y + 'px';
        this.enemy.style.left = this.x + 'px';
        this.enemy.src = this.srcImg
        document.querySelector('.game').appendChild(this.enemy)
    }

    moveToRight() {
        this.x += 1;
        this.showEnemy()

    }

    moveToLeft() {
        this.x -= this.speedX;
        this.showEnemy()
    }
}

let enemy11 = new Enemy(0, 'zombie1.1.png')

function play() {
    ninja.moveSkillRight()
    dichuyen11()
}

setInterval(play, 10)
clearInterval(play())


// enemy11.showEnemy();
function dichuyen11() {
    enemy11.moveToRight();
    if (enemy11.x >= 650) {
        enemy11.x = 0
        enemy11.y = Math.random() * 120 + 160
    }

}

// dichuyen11()
//
// let enemy21 = new Enemy(0,'zombie2.1.png')
// enemy21.showEnemy();
// function dichuyen21(){
//     enemy21.moveToRight();
//     if(enemy21.x >= 650){
//         enemy21.x = 0
//         enemy21.y=Math.random()*120+160
//     }
//     requestAnimationFrame(dichuyen21)
// }
// dichuyen21()
//
// let enemy31 = new Enemy(0,'zombie3.1.png')
// enemy31.showEnemy();
// function dichuyen31(){
//     enemy31.moveToRight();
//     if(enemy31.x >= 650){
//         enemy31.x = 0
//         enemy31.y=Math.random()*120+160
//     }
//     requestAnimationFrame(dichuyen31)
// }
// dichuyen31()
//
// let enemy1 = new Enemy(650,'zombie1.png')
// enemy1.showEnemy();
// function dichuyen1(){
//     enemy1.moveToLeft();
//     if(enemy1.x <= 0){
//         enemy1.x = 650
//         enemy1.y = Math.random()*120+160
//     }
//     requestAnimationFrame(dichuyen1)
// }
// dichuyen1()
//
// let enemy2 = new Enemy(650,'zombie2.png')
// enemy2.showEnemy();
// function dichuyen2(){
//     enemy2.moveToLeft();
//     if(enemy2.x <= 0){
//         enemy2.x = 650
//         enemy2.y = Math.random()*120+160
//     }
//     requestAnimationFrame(dichuyen2)
// }
// dichuyen2()
//
// let enemy3 = new Enemy(650,'zombie3.png')
// enemy3.showEnemy();
// function dichuyen3(){
//     enemy3.moveToLeft();
//     if(enemy3.x <= 0){
//         enemy3.x = 650
//         enemy3.y = Math.random()*120+160
//     }
//     requestAnimationFrame(dichuyen3)
// }
// dichuyen3()






