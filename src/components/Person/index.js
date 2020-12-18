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


class Person {
    constructor(person = {}, container) {
        this.person = person;
        this.container = container;
        this.dir = 1; // 1 向右，2向左
        this.render();
    }

    render() {
        // 人物住轮廓
        this.ele = document.createElement('div');
        this.ele.id = `p_${Math.random()}`;
        this.ele.className = 'person_item';
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
            this.img.src =  this.dir === 1 ? actionRight1 : actionLeft1;
        }
        if (directs.includes('k')) {
            this.img.src =  this.dir === 1 ? actionRight2 : actionLeft2;
        }
        if (directs.includes('l')) {
            this.img.src =  this.dir === 1 ? actionRight3 : actionLeft3;
        }
        if (directs.includes('p')) {
            this.img.src =  this.dir === 1 ? actionRight4 : actionLeft4;
        }
        if (directs.includes('esc')) {
            this.img.src =  this.dir === 1 ? dieRight : dieLeft;
        }
        if (!directs.length) {
            this.img.src =  this.dir === 1 ? defaultRight : defaultLeft;
        }
    }

    getEle() {
        return this.ele;
    }
}

export default Person;