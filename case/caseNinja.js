class Ninja {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSkill = this.x;
        this.ySkill = this.y;
        this.width = 60;
        this.height = 90;
        this.speedX = 10;
        this.speedY = 10;
        this.srcImg = 'down1.png'
        this.srcSkill = 'red_fireball_1.png'
        this.skill = document.createElement('img')
        this.skill.id = 'demo';
    }

    showSkillNinja() {
        this.skill.style.position = 'absolute'
        this.skill.style.height = this.height + 'px';
        this.skill.style.top = this.ySkill + 'px';
        this.skill.style.left = this.xSkill + 'px';
        this.skill.src = this.srcSkill
        document.querySelector('.game').appendChild(this.skill)
    }

    initSkill() {
        this.xSkill = this.x;
        this.ySkill = this.y;
    }

    moveSkillRight() {
        this.xSkill += this.speedX;
        this.showSkillNinja();
        this.check()
    }

    getXSkill() {
        return this.xSkill;
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

    check() {
        let d = document.getElementById('demo')
        if (this.xSkill >= 650) {
            this.skill.parentNode.removeChild(d);
        }
    }
}

let ninja = new Ninja(325, 180)
ninja.showNinja()
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 40) {
        ninja.moveDown();
    }
    if (e.keyCode === 38) {
        ninja.moveUp();
    }
    if (e.keyCode === 39) {
        // checkStatus = 1
        ninja.moveRight();
    }
    if (e.keyCode === 37) {
        // checkStatus = 0
        ninja.moveLeft();
    }
    if (e.keyCode === 75) {
        ninja.initSkill();
        let id = setInterval(() => {
            if (ninja.getXSkill() > 650) {
                clearTimeout(id);
            } else {
                ninja.moveSkillRight();
            }
        }, 60)
    }
})

class Enemy {
    constructor(x, src) {
        this.x = x;
        this.width = 60;
        this.height = 90;
        this.y = Math.round(Math.random() * 180);
        this.speedX = 2;
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

let enemy1 = new Enemy(650, 'zombie1.png')
enemy1.showEnemy();

function dichuyen1() {
    enemy1.moveToLeft();
    if (enemy1.x <= 0) {
        enemy1.x = 650
        enemy1.y = Math.random() * 120 + 160
    }
    isCollision(ninja,enemy1)


    requestAnimationFrame(dichuyen1)
}

dichuyen1()


setInterval(dichuyen1, 30000)

let enemy2 = new Enemy(650, 'zombie2.png')
enemy2.showEnemy();

function dichuyen2() {
    enemy2.moveToLeft();
    if (enemy2.x <= 0) {
        enemy2.x = 650
        enemy2.y = Math.random() * 120 + 160
    }
    isCollision(ninja,enemy2)
    requestAnimationFrame(dichuyen2)
}

dichuyen2()
setInterval(dichuyen2, 20000)

let enemy3 = new Enemy(650, 'zombie3.png')
enemy3.showEnemy();

function dichuyen3() {
    enemy3.moveToLeft();
    if (enemy3.x <= 0) {
        enemy3.x = 650
        enemy3.y = Math.random() * 120 + 160
    }
    isCollision(ninja,enemy3)
    requestAnimationFrame(dichuyen3)
}

dichuyen3()
setInterval(dichuyen3, 15000)

function isCollision(ninja, enemy) {
    if (ninja.x + ninja.width >= enemy.x &&
        ninja.x <= enemy.x + enemy.width &&
        ninja.y + enemy.height >= enemy.y &&
        ninja.y <= enemy.y + enemy.height) {
        document.getElementById('ninja').remove();
    }
}

function isCollision2(skill, enemy) {
    if (skill.x + skill.width >= enemy.x &&
        skill.x <= enemy.x + enemy.width &&
        skill.y + skill.height >= enemy.y &&
        skill.y <= enemy.y + enemy.height) {
        let x = document.getElementById('zombie')
        this.enemy.parentNode.removeChild(x);
    }
}







