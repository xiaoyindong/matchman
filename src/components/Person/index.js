/**
 * 名称
 * 等级
 * 元素
 */

import defaultLeft from '../../images/default-left.gif';
import defaultRight from '../../images/default-right.gif';
import dieLeft from '../../images/die-left.gif';
import dieRight from '../../images/die-right.gif';
import runLeft from '../../images/run-left1.gif';
import runRight from '../../images/run-right1.gif';
import actionLeft1 from '../../images/fowradL-left.gif';
import actionRight1 from '../../images/fowradL-right.gif';
import actionLeft2 from '../../images/fowradR-left.gif';
import actionRight2 from '../../images/fowradR-right.gif';
import actionLeft3 from '../../images/lianzhao-left.gif';
import actionRight3 from '../../images/lianzhao-right.gif';
import actionLeft4 from '../../images/anqi-left.gif';
import actionRight4 from '../../images/anqi-right.gif';

import './style.less';

const behavior = [{
        value: 'up',
    },
    {
        value: 'left',
    },
    {
        value: 'down',
    },
    {
        value: 'right',
    },
    {
        value: 'j',
        time: 1,
    },
    {
        value: 'k',
        time: 1,
    },
    {
        value: 'l',
        time: 3,
    },
    {
        value: 'p',
        time: 3,
    }
];


class Person {
    constructor(person = {}, container) {
        this.person = person;
        this.container = container;
        this.dir = 1; // 1 向右，2向左
        this.render();
        // 机器人移动
        this.translateX = person.translateX || 100;
        this.translateY = person.translateY || 100;
        this.translateZ = person.translateZ || 1;
        this.speedX = 0;
        this.speedY = 0;
        this.diff = 5;

        this.moving = false;

        this.screenWidth = this.container.clientWidth;
        this.screenHeight = this.container.clientHeight;
        this.eleWidth = this.ele.offsetWidth;
        this.eleHeight = this.ele.offsetHeight;

        this.diestatus = false;

        if (this.person.ai) {
            this.stop = false;
            this.ele.style.transform = `translate3d(${this.translateX}px, ${this.translateY}px, ${this.translateZ}px)`;
            requestAnimationFrame(this.$ai.bind(this))
        }
    }

    $ai() {
        if (this.diestatus || !this.person.ai) {
            return;
        }
        const random = Math.floor(Math.random() * behavior.length);
        const action = behavior[random];
        this.action([action.value]);
        if (random < 4) {
            this.stop = false;
            setTimeout(() => {
                this.stop = true;
            }, Math.floor(Math.random() * 10) * 1000);
            this.move([action.value]);
        } else {
            setTimeout(this.$ai.bind(this), action.time * 1000);
        }
    }

    move(directs) {
        this.speedX = [0, 5, -5, 0][Math.floor(Math.random() * 4)];
        this.speedY = [0, 5, -5, 0][Math.floor(Math.random() * 4)];

        if (directs.includes('right')) {
            this.speedX = this.diff;
        } else if (directs.includes('left')) {
            this.speedX = -this.diff;
        } else if (directs.includes('down')) {
            this.speedY = this.diff;
        } else if (directs.includes('up')) {
            this.speedY = -this.diff;
        }
        this.animation();
    }

    animation() { // move
        if (this.diestatus) {
            return;
        }
        if (this.stop && this.person.ai) {
            this.speedX = 0;
            this.speedY = 0;
            requestAnimationFrame(this.$ai.bind(this))
            return;
        }
        if (this.speedX || this.speedY) {
            this.translateX += this.speedX;
            this.translateY += this.speedY;
            if (this.translateX < 150) {
                this.translateX = 150;
                this.speedX = 0;
            }
            if (this.translateY < 150) {
                this.translateY = 150;
                this.speedY = 0
            }
            if (this.translateX > this.screenWidth - this.eleWidth - 100) {
                this.translateX = this.screenWidth - this.eleWidth - 100;
                this.speedX = 0;
            }
            if (this.translateY > this.screenHeight - this.eleHeight - 80) {
                this.translateY = this.screenHeight - this.eleHeight - 80;
                this.speedY = 0;
            }
            this.ele.style.transform = `translate3d(${this.translateX}px, ${this.translateY}px, ${this.translateZ}px)`;
            requestAnimationFrame(this.animation.bind(this));
        } else {
            this.stop = true;
            requestAnimationFrame(this.$ai.bind(this))
        }
    }

    render() {
        // 人物住轮廓
        this.ele = document.createElement('div');
        this.ele.id = `p_${Math.random()}`;
        this.ele.className = this.person.ai ? 'person_item_ai' : 'person_item';
        // 人物贴图
        this.img = document.createElement('img');
        this.img.className = 'person_images_item';
        this.img.src = defaultLeft;
        // 人物信息
        this.personInfo = document.createElement('div');
        this.personInfo.className = 'person_info';
        this.renderInfo();
        // 插入
        this.ele.append(this.personInfo);
        this.ele.append(this.img);
        this.container.append(this.ele);
    }

    renderInfo() {

        this.personInfo.innerHTML = `
        <div class="person_level">L:${this.person.level}</div>
        <div class="person_name">${this.person.name}</div>
        <div class="person_blood">${this.person.blood || 100}</div>
        <div class="person_blood_box">
            <div class="person_blood_value"></div>
        </div>
        `
    }

    action(directs) {
        if (directs.includes('right')) {
            this.dir = 1;
            this.img.src = runRight;
        }
        if (directs.includes('left')) {
            this.dir = 2;
            this.img.src = runLeft;
        }

        if (directs.includes('up')) {
            this.img.src = this.dir === 1 ? runRight : runLeft;
        }

        if (directs.includes('down')) {
            this.img.src = this.dir === 1 ? runRight : runLeft;
        }

        if (directs.includes('j')) {
            this.img.src = this.dir === 1 ? actionRight1 : actionLeft1;
        }
        if (directs.includes('k')) {
            this.img.src = this.dir === 1 ? actionRight2 : actionLeft2;
        }
        if (directs.includes('l')) {
            this.img.src = this.dir === 1 ? actionRight3 : actionLeft3;
        }
        if (directs.includes('p')) {
            this.img.src = this.dir === 1 ? actionRight4 : actionLeft4;
        }
        if (directs.includes('esc')) {
            this.img.src = this.dir === 1 ? dieRight : dieLeft;
        }
        if (!directs.length) {
            this.img.src = this.dir === 1 ? defaultRight : defaultLeft;
        }
    }

    makedie() {
        this.img.src = this.dir === 1 ? dieRight : dieLeft;
        this.diestatus = true;
        setTimeout(() => {
            this.container.removeChild(this.ele);
        },3000);
    }

    getEle() {
        return this.ele;
    }
}

export default Person;